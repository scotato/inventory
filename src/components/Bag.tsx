import { useRef } from "react";
import useMeasure from "use-measure";
import { parseItemParts } from "../helpers/item";
import Item from "./Item";
interface BagProps {
  bag: Bag;
}

const style = {
  padding: 16,
  background: "black",
  width: 512,
  maxWidth: "100%",
};

function Bag({ bag }: BagProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useMeasure(ref);
  const { id, minted, ...items } = bag;
  const itemsSlotted = parseItemParts(items) as {
    [key: string]: Item;
  };

  return (
    <div style={{ ...style, height: width }} ref={ref}>
      {Object.keys(itemsSlotted)
        .sort(byOrder)
        .map((slot) => {
          const key = slot as keyof typeof Item;
          const item = itemsSlotted[key];
          return <Item item={item} key={slot} />;
        })}
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
