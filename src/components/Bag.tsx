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
  },
  bag: {
    padding: 16,
    background: "black",
    width: 512,
    maxWidth: "100%",
  },
  link: {
    color: colors.muted,
    textDecoration: "none",
  },
  footer: {
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

  return (
    <div style={style.container}>
      <div style={{ ...style.bag, height: width }} ref={ref}>
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

function getScore(item: Item) {}

export default Bag;
