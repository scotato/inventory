import { useRef } from "react";
import useMeasure from "use-measure";
import rarities from "../data/rare.json";
import { colors } from "../helpers/theme";
import { parseItemParts } from "../helpers/item";
import Item from "./Item";

const ENDPOINT =
  "https://opensea.io/assets/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7/";
interface BagProps {
  bag: Bag;
}

const style = {
  container: {
    margin: 16,
    width: "100%",
    maxWidth: 512,
  },
  bag: {
    padding: 16,
    background: "black",
  },
  link: {
    color: colors.muted,
    textDecoration: "none",
  },
  score: {
    margin: "0 8px",
  },
  footer: {
    display: "flex",
    padding: 16,
    color: colors.muted,
  },
};

function Bag({ bag }: BagProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useMeasure(ref);
  const { id, minted, ...items } = bag;
  const itemsSlotted = parseItemParts(items) as {
    [key: string]: Item;
  };
  const scores = rarities.find((loot) => loot.lootId === Number(bag.id));

  return (
    <div style={style.container}>
      <div style={{ ...style.bag, height: width }} ref={ref} className="bag">
        {Object.keys(itemsSlotted)
          .sort(byOrder)
          .map((slot) => {
            const key = slot as keyof typeof Item;
            const item = itemsSlotted[key];
            return <Item item={item} key={slot} />;
          })}
      </div>
      <div style={style.footer}>
        <a
          style={style.link}
          href={`${ENDPOINT}/${bag.id}`}
          target="_blank"
          rel="noreferrer"
        >
          #{bag.id}
        </a>
        <p style={style.score}>Rarest: {scores?.rarest}</p>
        <p style={style.score}>Item Score: {scores?.itemScore}</p>
        <p style={style.score}>Score: {scores?.score}</p>
      </div>
    </div>
  );
}

const slotOrder = [
  "weapon",
  "chest",
  "head",
  "waist",
  "foot",
  "hand",
  "neck",
  "ring",
];

function byOrder(a: string, b: string) {
  const aIndex = slotOrder.indexOf(a);
  const bIndex = slotOrder.indexOf(b);
  if (aIndex > bIndex) return 1;
  if (aIndex < bIndex) return -1;
  return 0;
}

export default Bag;
