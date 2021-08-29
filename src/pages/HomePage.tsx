import { useState, Key } from "react";
import { colors } from "../helpers/theme";
import Bag from "../components/Bag";
import ShareAdventurer from "../components/ShareAdventurer";
import useWallet from "../hooks/use-wallet";

const DEMO_ADDRESS = "0xC6c41119Af1e0840357245c66baAf0e21B694D4d";

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
  loading: {
    margin: 16,
    color: colors.muted,
  },
  error: {
    margin: 16,
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

function HomePage() {
  const [address, setAddress] = useState(DEMO_ADDRESS);
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

      {loading && <p style={style.loading}>Loading...</p>}

      {error && <p style={style.error}>{error}</p>}

      <div style={style.bags}>
        {data.wallet?.bags.map((bag) => (
          <Bag key={bag.id as Key} bag={bag} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
