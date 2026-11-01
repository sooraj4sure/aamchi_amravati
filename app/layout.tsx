import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import SampleStrip from "../components/SampleStrip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aamchi Amravati — The City's Own Community Page",
  description:
    "Aamchi Amravati (@aamchi_amravati) — sharing the best of Amravati: food, places, festivals and local pride. Feature your business with us.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SampleStrip />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
