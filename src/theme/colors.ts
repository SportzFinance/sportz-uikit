import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#006AB6",
  primaryBright: "#D71F55",
  primaryDark: "#291e08",
  secondary: "#68cf0e", //"#dadadab3",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFCFDD",
  backgroundDisabled: "#E9EAEB",
  contrast: "#006AB6",
  invertedContrast: "#5CDB95",
  input: "#eeeaf4",
  tertiary: "#FF7A00",
  text: "#D71F55",
  textDisabled: "#082c4e",
  textSubtle: "#006AB6",
  borderColor: "#dadadab3",
  card: "#e1dec7",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#338c15", //Title?
  background: "#25190a", //#40290e
  backgroundDisabled: "#291e08",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#291e08", //was 0098A1
  tertiary: "#353547",
  text: "#338c15",
  textDisabled: "#338c15",
  textSubtle: "#99a917",
  borderColor: "#524B63",
  card: "#0e1f0e",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
