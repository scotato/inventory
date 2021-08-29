import { colors } from "../helpers/theme";

const style = {
  app: {
    margin: "0 auto",
    padding: 64,
    maxWidth: 1800,
  },
  footer: {
    display: "flex",
    marginTop: 16,
    marginLeft: 32,
    marginRight: 32,
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
      justifySelf: "flex-end",
      color: colors.muted,
      textDecoration: "none",
    },
  };

  return (
    <span style={style.resources}>
      <a
        href="https://github.com/scotato/inventory"
        target="_blank"
        style={style.link}
        rel="noreferrer"
      >
        GitHub
      </a>
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
    common: {
      color: colors.common,
    },
    uncommon: {
      color: colors.uncommon,
    },
    rare: {
      color: colors.rare,
    },
    epic: {
      color: colors.epic,
    },
    legendary: {
      color: colors.legendary,
    },
    mythic: {
      color: colors.mythic,
    },
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
