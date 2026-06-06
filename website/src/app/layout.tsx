import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import AgeGate from "@/components/AgeGate";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Pilin' It Higher Farms | Vermont Cannabis",
  description:
    "Tier 2 cannabis cultivator perched high in the hills of Duxbury, VT. Solar-powered, off-grid greenhouse farm. Living soil. Small batch.",
  keywords: ["Vermont cannabis", "Duxbury VT", "craft cannabis", "small batch", "greenhouse grown"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full font-sans">
        <AgeGate />
        {children}
      </body>
    </html>
  );
}
