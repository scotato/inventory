import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";
import {
  findItemType,
  suffixes,
  namePrefixes,
  nameSuffixes,
} from "../helpers/item";
import { itemRarity } from "loot-rarity";

const SUBGRAPH = "https://api.thegraph.com/subgraphs/name/shahruz/loot";

const walletQuery = gql`
  query Wallet($id: String!) {
    wallet(id: $id) {
      id
      address
      joined
      bagsHeld
      bags {
        id
        minted
        weapon
        chest
        head
        waist
        foot
        hand
        neck
        ring
      }
    }
  }
`;

type WalletQuery = {
  data: {
    wallet?: Wallet;
  };
  loading: boolean;
  error?: string;
};

function useWallet(address: string): WalletQuery {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const clearError = () => setError("");

  useEffect(() => {
    if (!address) {
      setData({});
      return setError("No address provided");
    }

    if (address.length !== 42) {
      setData({});
      return setError("Invalid address");
    }

    startLoading();
    request(SUBGRAPH, walletQuery, {
      id: address.toLowerCase(),
    })
      .then(addItemRarity)
      .then(setData)
      .then(stopLoading)
      .then(clearError)
      .catch((err) => {
        setError(err.message);
        stopLoading();
      });
  }, [address]);

  return { data, loading, error };
}

const itemKeys = [
  "weapon",
  "chest",
  "head",
  "waist",
  "foot",
  "hand",
  "neck",
  "ring",
];

async function addItemRarity({ wallet }: { wallet: Wallet }) {
  // for each bag, add item rarities
  const bags = [];

  if (!wallet) throw new Error("No bags found at this address");

  for (const bag of wallet.bags) {
    const items = [];
    for (const itemKey of itemKeys) {
      const name = bag[itemKey as keyof Bag] as string;

      items.push({
        slot: itemKey,
        name,
        item: findItemType(name),
        suffix: suffixes.find((suffix) => name.includes(suffix)) || null,
        namePrefix:
          namePrefixes.find((prefix) => name.includes(prefix)) || null,
        nameSuffix:
          nameSuffixes.find((suffix) => name.includes(suffix)) || null,
        bonus: name.includes("+1"),
        rarity: await itemRarity(name),
      });
    }
    bags.push({ ...bag, items });
  }

  return {
    wallet: { ...wallet, bags },
  };
}

export default useWallet;
