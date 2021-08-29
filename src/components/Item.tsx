import { colorForScore } from "../helpers/theme";

interface ItemProps {
  item?: Item;
}

function Item({ item }: ItemProps) {
  console.log("item", item);
  const style = {
    margin: 0,
    fontSize: 20,
    color: colorForScore(item?.rarity || 1),
  };

  return <p style={style}>{item?.name}</p>;
}

export default Item;
