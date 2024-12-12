import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import { archivo } from "./fonts";

export const metadata: Metadata = {
  title: "mirrorlessBooth", 
  description: "Pro photo booth made easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          min-h-dvh
          bg-gradient-to-b from-[#1d0033] from-0% via-[#28102c] via-33% via-[#201624] via-66% to-[#1d0033] to-100%
          ${archivo.variable} 
          bg-white
          font-[family-name:var(--font-archivo)]
          mx-20
          overflow-x-hidden
          antialiased` }
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
