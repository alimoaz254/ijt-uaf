"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { colorPalettes, defaultPalette, type ColorPalette } from "@/lib/theme";

type ThemeContextType = {
  currentPalette: ColorPalette;
  setPalette: (paletteId: string) => void;
  availablePalettes: typeof colorPalettes;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(
    colorPalettes[defaultPalette]
  );
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedPalette = localStorage.getItem("ijt-theme-palette");
    if (savedPalette && colorPalettes[savedPalette]) {
      setCurrentPalette(colorPalettes[savedPalette]);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const root = document.documentElement;
    root.dataset.theme = currentPalette.id;
    root.style.setProperty("--color-background", currentPalette.background);
    root.style.setProperty("--color-foreground", currentPalette.foreground);
    root.style.setProperty("--color-accent", currentPalette.accent);
    root.style.setProperty("--color-surface", currentPalette.id === "warm" ? currentPalette.accent : "#f1e4d1");
    root.style.setProperty("--color-card-text", "#162660");
    root.style.setProperty("--color-on-primary", currentPalette.id === "navy" ? "#162660" : "#f1e4d1");
    root.style.setProperty("--color-primary", currentPalette.foreground);
    root.style.setProperty("--color-secondary", currentPalette.accent);
    root.style.setProperty("--color-text", currentPalette.foreground);
    root.style.setProperty("--color-text-muted", currentPalette.foreground);
    root.style.setProperty("--color-background-alt", currentPalette.accent);
    root.style.setProperty("--color-border", currentPalette.accent);
    root.style.setProperty("--color-on-primary", currentPalette.background);
  }, [currentPalette, isMounted]);

  const setPalette = (paletteId: string) => {
    if (colorPalettes[paletteId]) {
      setCurrentPalette(colorPalettes[paletteId]);
      localStorage.setItem("ijt-theme-palette", paletteId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentPalette, setPalette, availablePalettes: colorPalettes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
