import { useState, Key } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../helpers/theme";
import Bag from "../components/Bag";
import ShareAdventurer from "../components/ShareAdventurer";
import useWallet from "../hooks/use-wallet";

interface WalletPageParams {
  address: string;
}

const style = {
  page: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  title: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 0,
  },
  subtitle: {
    marginLeft: 16,
    marginRight: 16,
    opacity: 0.5,
  },
  error: {
    marginLeft: 16,
    marginRight: 16,
    color: colors.red,
  },
  input: {
    margin: "8px 16px",
    padding: 8,
    background: "black",
    color: colors.muted,
    maxWidth: 512,
    border: 0,
  },
  bags: {
    display: "flex",
    flexWrap: "wrap" as "wrap",
  },
};

function WalletPage() {
  const params = useParams<WalletPageParams>();
  const [address, setAddress] = useState(params.address);
  const { data, loading, error } = useWallet(address);

  return (
    <div style={style.page}>
      <h1 style={style.title}>Inventory</h1>
      <input
        style={style.input}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
      />

      <ShareAdventurer address={address} />

      {loading && <p style={style.subtitle}>Loading...</p>}

      {error && <pre style={style.error}>{JSON.stringify(error, null, 2)}</pre>}

      <div style={style.bags}>
        {data.wallet?.bags.map((bag) => (
          <Bag key={bag.id as Key} bag={bag} />
        ))}
      </div>
    </div>
  );
}

export default WalletPage;
