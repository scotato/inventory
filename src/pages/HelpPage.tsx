import { colors, styleLegend } from "../helpers/theme";
import { Link } from "react-router-dom";

const style = {
  page: {
    display: "flex",
    flexDirection: "column" as "column",
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    color: colors.muted,
  },
  titleLink: {
    color: colors.white,
    textDecoration: "none",
  },
  link: {
    color: colors.blue,
    textDecoration: "none",
  },
  ...styleLegend,
};

function HelpPage() {
  return (
    <div style={style.page}>
      <h1 style={style.title}>
        <Link to="/" style={style.titleLink}>
          Inventory
        </Link>
      </h1>
      <p style={style.subtitle}>
        This app helps you see the rarity of the items in your bag.
      </p>

      <h2>Item Score</h2>
      <ul>
        <li>
          <span style={style.common}>Common</span> items have 300 or more
          occurences with a rarity of 1.
        </li>
        <li>
          <span style={style.uncommon}>Uncommon</span> items have between 50 and
          300 occurences with a rarity of 2.
        </li>
        <li>
          <span style={style.rare}>Rare</span> items have between 25 and 50
          occurences with a rarity of 3.
        </li>
        <li>
          <span style={style.epic}>Epic</span> items have between 10 and 25
          occurences with a rarity of 4.
        </li>
        <li>
          <span style={style.legendary}>Legendary</span> items have between 2
          and 10 occurences with a rarity of 5.
        </li>
        <li>
          <span style={style.mythic}>Mythic</span> items have a single occurence
          with a rarity of 6.
        </li>
      </ul>

      <p>
        Item Score is calculated by adding the rarity value of all items in a
        bag.
      </p>

      <h2>Resources</h2>
      <ul>
        <li>
          <a
            href="https://twitter.com/lootproject"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Inventory GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bpierre/loot-rarity"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Item Rarity GitHub
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Anish-Agnihotri/dhof-loot/"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Bag Rarity GitHub
          </a>
        </li>
      </ul>

      <h2>Loot</h2>
      <ul>
        <li>
          <a
            href="https://twitter.com/lootproject"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/Q5KGjftshm"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </li>
        <li>
          <a
            href="https://opensea.io/collection/loot-rng"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            OpenSea
          </a>
        </li>
        <li>
          <a
            href="https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Etherscan
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shahruz/loot-subgraph"
            style={style.link}
            target="_blank"
            rel="noreferrer"
          >
            Subgraph
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HelpPage;
