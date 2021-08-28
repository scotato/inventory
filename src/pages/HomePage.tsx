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
  link: {
    color: colors.muted,
    textDecoration: "none",
    marginLeft: 32,
    marginRight: 32,
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
      {loading && <p style={style.subtitle}>Loading...</p>}

      {error && <pre style={style.error}>{JSON.stringify(error, null, 2)}</pre>}

      <div style={style.bags}>
        {data.wallet?.bags.map((bag) => (
          <Bag key={bag.id as Key} bag={bag} />
        ))}
      </div>
      <a
        href="https://github.com/scotato/inventory"
        target="_blank"
        style={style.link}
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  );
}

export default HomePage;
