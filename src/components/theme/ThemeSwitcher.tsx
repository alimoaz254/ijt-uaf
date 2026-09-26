"use client";

import type { CSSProperties } from "react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeSwitcher() {
  const { currentPalette, setPalette, availablePalettes } = useTheme();
  const palettes = Object.values(availablePalettes);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="palette-switcher"
      >
        <span className="palette-switcher__label">Palette</span>
        <div className="palette-switcher__options" role="group" aria-label="Color palette">
          {palettes.map((palette) => (
            <button
              key={palette.id}
              onClick={() => setPalette(palette.id)}
              aria-label={palette.name}
              aria-pressed={currentPalette.id === palette.id}
              className={`palette-switcher__option ${
                currentPalette.id === palette.id
                  ? "is-active"
                  : ""
              }`}
              style={{
                "--swatch-background": palette.background,
                "--swatch-foreground": palette.foreground,
                "--swatch-accent": palette.accent,
              } as CSSProperties}
              title={palette.name}
            >
              <span className="palette-switcher__swatch" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          ))}
        </div>
        <span className="palette-switcher__name">{currentPalette.name}</span>
      </motion.div>
    </div>
  );
}
