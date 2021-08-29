import { colors, styleLegend } from "../helpers/theme";
import { Link } from "react-router-dom";

const style = {
  app: {
    display: "grid",
    margin: "0 auto",
    padding: 64,
    maxWidth: 1800,
    minHeight: "100%",
    gridTemplateRows: "1fr auto",
  },
  footer: {
    display: "flex",
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    justifyContent: "space-between",
  },
};

function AppLayout({ children }: { children: JSX.Element }) {
  return (
    <div style={style.app} className="app-layout">
      {children}
      <footer style={style.footer}>
        <Legend />
        <Resources />
      </footer>
    </div>
  );
}

function Resources() {
  const style = {
    resources: {},
    link: {
      color: colors.white,
      textDecoration: "none",
    },
  };

  return (
    <span style={style.resources}>
      <Link to="/help" style={style.link}>
        Help
      </Link>
    </span>
  );
}

function Legend() {
  const style = {
    legend: {
      display: "grid",
      gridAutoFlow: "column",
      justifyContent: "flex-start",
      gridColumnGap: 12,
      gridRowGap: 12,
    },
    ...styleLegend,
  };

  return (
    <span style={style.legend} className="legend">
      <span style={style.common}>Common</span>
      <span style={style.uncommon}>Uncommon</span>
      <span style={style.rare}>Rare</span>
      <span style={style.epic}>Epic</span>
      <span style={style.legendary}>Legendary</span>
      <span style={style.mythic}>Mythic</span>
    </span>
  );
}

export default AppLayout;
