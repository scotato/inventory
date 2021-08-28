interface BagProps {
  bag: Bag
}

const style = {
  margin: '0 auto',
  padding: 64,
  maxWidth: 800
}

function Bag({ bag }: BagProps) {
  return (
    <div style={style}>
      { JSON.stringify(bag, null, 2) }
    </div>
  );
}

export default Bag;
