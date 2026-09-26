export type ColorPalette = {
  id: string;
  name: string;
  background: string;
  foreground: string;
  accent: string;
};

export const colorPalettes: Record<string, ColorPalette> = {
  warm: {
    id: "warm",
    name: "01 - Cream / Navy / Blue",
    background: "#f1e4d1",
    foreground: "#162660",
    accent: "#D0E6FD",
  },
  navy: {
    id: "navy",
    name: "02 - Navy / Cream / Blue",
    background: "#162660",
    foreground: "#f1e4d1",
    accent: "#D0E6FD",
  },
  sky: {
    id: "sky",
    name: "03 - Blue / Navy / Cream",
    background: "#D0E6FD",
    foreground: "#162660",
    accent: "#f1e4d1",
  },
};

export const defaultPalette = "warm";
