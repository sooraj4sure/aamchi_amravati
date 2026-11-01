import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "./globals.css";
import SampleStrip from "../components/SampleStrip";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Aamchi Amravati — The City's Own Community Page",
  description:
    "Aamchi Amravati (@aamchi_amravati) — sharing the best of Amravati: food, places, festivals and local pride. Feature your business with us.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <SampleStrip /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
