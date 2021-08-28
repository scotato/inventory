import { parseItemParts } from "../helpers/item";

interface BagProps {
  bag: Bag;
}

const style = {
  padding: 16,
  background: "black",
};

function Bag({ bag }: BagProps) {
  const { id, minted, ...items } = bag;
  const itemsSlotted = parseItemParts(items) as {
    [key: string]: Item;
  };

  return (
    <pre style={style}>
      {Object.keys(itemsSlotted).map((slot) => {
        const key = slot as keyof typeof Item;
        const item = itemsSlotted[key];
        return <Item item={item} key={slot} />;
      })}
    </pre>
  );
}

interface ItemProps {
  item: Item;
}

function Item({ item }: ItemProps) {
  const style = {
    color: colorForScore(item.score),
  };
  return <p style={style}>{item.name}</p>;
}

function colorForScore(score: number) {
  switch (score) {
    case 4:
      return "purple";
    case 3:
      return "blue";
    case 2:
      return "green";
    case 1:
    default:
      return "gray";
  }
}

export default Bag;
