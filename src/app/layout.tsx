import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "IJT-UAF | Islamic Student Organization",
  description:
    "IJT-UAF is a student organization working for student grooming, education, self and mental growth based on Islamic ideology. Building future leaders through character development and academic excellence.",
  keywords:
    "Islamic student organization, university student group, leadership development, Islamic values, student activities, UAF, capacity building",
  authors: [{ name: "IJT-UAF" }],
  openGraph: {
    title: "IJT-UAF | Islamic Student Organization",
    description:
      "Building future leaders through Islamic values, academic excellence, and character development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{
          "--font-inter": "Inter, system-ui, sans-serif",
        } as React.CSSProperties}
      >
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
            <ThemeSwitcher />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
