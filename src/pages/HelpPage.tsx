import { colors, styleLegend } from "../helpers/theme";
import { Link } from "react-router-dom";

const style = {
  page: {
    display: "flex",
    flexDirection: "column" as "column",
    maxWidth: 800,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    marginBottom: 0,
  },
  subtitle: {
    color: colors.muted,
  },
  detail: {
    marginLeft: 8,
    color: colors.muted,
    fontSize: 16,
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
          <span style={style.common}>Common</span> items appear 375 or more
          times with a rarity score of 1.{" "}
          <span style={style.detail}>47.25% - 30,237 items</span>
        </li>
        <li>
          <span style={style.uncommon}>Uncommon</span> items appear 374 or less
          times with a rarity score of 2.{" "}
          <span style={style.detail}>12.61% - 8,073 items</span>
        </li>
        <li>
          <span style={style.rare}>Rare</span> items appear 357 or less times
          with a rarity score of 3.{" "}
          <span style={style.detail}>11.78% - 7,537 items</span>
        </li>
        <li>
          <span style={style.epic}>Epic</span> items appear 100 or less times
          with a rarity score of 4.{" "}
          <span style={style.detail}>10.29% - 6,587 items</span>
        </li>
        <li>
          <span style={style.legendary}>Legendary</span> items appear 9 or less
          times with a rarity score of 5.{" "}
          <span style={style.detail}>9.67% - 6,189 items</span>
        </li>
        <li>
          <span style={style.mythic}>Mythic</span> items appear exactly 1 time
          with a rarity score of 6.{" "}
          <span style={style.detail}>8.4% - 5,377 items</span>
        </li>
      </ul>
      <p>
        Item Score is calculated by adding the rarity score of all items in a
        bag.
      </p>
      <h2>Bag Rank</h2>
      <br />
      <p>
        Bag Rank is based on the sum of the occurrence rarity of all of the
        items in a bag, Item Score groups items into the six categories above,
        because of this grouping it is possible for one bag to have a better
        Item Score but lower Bag Rank than another bag.
      </p>
      <h2>Resources</h2>
      <ul>
        <li>
          <a
            href="https://github.com/scotato/inventory"
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
