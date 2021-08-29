import { useRef, Key } from "react";
import useMeasure from "use-measure";
import rarities from "../data/rare.json";
import { colors } from "../helpers/theme";
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
  const scores = rarities.find((loot) => loot.lootId === Number(bag.id));
  const itemScore = bag.items.reduce((score, item) => item.rarity + score, 0);

  return (
    <div style={style.container}>
      <div style={{ ...style.bag, height: width }} ref={ref} className="bag">
        {bag.items
          .map((item) => item.slot)
          .sort(byOrder)
          .map((slot) => {
            const key = slot as keyof typeof Item;
            const item = bag.items.find((item) => item.slot === key);
            return <Item item={item} key={slot as Key} />;
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
        <p style={style.score}>Rank: {scores?.rarest}</p>
        <p style={style.score}>Top: {getRarityPercentage(scores?.rarest)}%</p>
        <p style={style.score}>Item Score: {itemScore}</p>
      </div>
    </div>
  );
}

function getRarityPercentage(rank = 8000) {
  return ((rank / 8000) * 100).toFixed(0);
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

function byOrder(a: String, b: String) {
  const aIndex = slotOrder.indexOf(a as string);
  const bIndex = slotOrder.indexOf(b as string);
  if (aIndex > bIndex) return 1;
  if (aIndex < bIndex) return -1;
  return 0;
}

export default Bag;
