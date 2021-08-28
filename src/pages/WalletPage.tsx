import { Key } from "react";
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
  link: {
    color: colors.muted,
    textDecoration: "none",
    marginLeft: 32,
    marginRight: 32,
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

export default WalletPage;
