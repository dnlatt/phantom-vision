import type { Metadata } from "next";
import { Orbitron, Open_Sans } from "next/font/google";
import "./globals.css";
import GlowingBackgroundWrapper from "./components/common/BackgroundWrapper";
import { NavBar } from "./components/common/NavBar";
import Footer from "./components/common/FooterSection";


const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],  // optional: specify weights you need
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],  // optional: specify weights you need
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${openSans.variable} antialiased`}
        style={{ fontFamily: "var(--font-open-sans), sans-serif" }}>
        <GlowingBackgroundWrapper>
          <NavBar />
            {children}
          <Footer />
        </GlowingBackgroundWrapper>
      </body>
    </html>
  );
}
