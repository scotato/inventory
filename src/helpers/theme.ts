export const colors = {
  muted: "#838383",
  gray: "#aaaaaa",
  background: "#151515",
  backgrounddark: "#252525",
  blue: "#2e82ff",
  green: "#00DC82",
  red: "#FF6492",
  yellow: "#e8e228",
  purple: "#9189d9",
  white: "#ffffff",
  black: "#000000",
  common: "#838383",
  uncommon: "#00DC82",
  rare: "#2e82ff",
  epic: "#c13cff",
  legendary: "#f8b73e",
  mythic: "#ff44b7",
};

export function colorForScore(score: number) {
  switch (score) {
    case 6:
      return colors.mythic;
    case 5:
      return colors.legendary;
    case 4:
      return colors.epic;
    case 3:
      return colors.rare;
    case 2:
      return colors.uncommon;
    case 1:
    default:
      return colors.common;
  }
}