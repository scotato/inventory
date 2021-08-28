interface BagProps {
  bag: Bag
}

const style = {
  padding: "16px 0",
}

function Bag({ bag }: BagProps) {
  return (
    <div style={style}>
      { JSON.stringify(bag, null, 2) }
    </div>
  );
}

export default Bag;
