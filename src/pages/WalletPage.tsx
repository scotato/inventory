import { Key } from "react";
import { useParams } from "react-router-dom";
import Bag from "../components/Bag";
import useWallet from "../hooks/use-wallet";

interface WalletPageParams {
  address: string;
}

const style = {
  page: {},
  title: {
    marginBottom: 0,
  },
  subtitle: {
    opacity: 0.5,
  },
  bags: {
    display: "grid",
    gridRowGap: 16,
    gridColumnGap: 16,
    gridTemplateColumns: "repeat(auto-fill, minmax(512px, 1fr))",
  },
};

function WalletPage() {
  const { address } = useParams<WalletPageParams>();
  const { data, loading, error } = useWallet(address);

  if (error)
    return <pre style={style.page}>{JSON.stringify(error, null, 2)}</pre>;

  if (loading) return <div style={style.page}>loading...</div>;

  return (
    <div style={style.page}>
      <h1 style={style.title}>Adventurer</h1>
      <p style={style.subtitle}>{address}</p>
      <div style={style.bags}>
        {data.wallet?.bags.map((bag) => (
          <Bag key={bag.id as Key} bag={bag} />
        ))}
      </div>
    </div>
  );
}

export default WalletPage;
