import type { Metadata } from "next";
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
          bg-[linear-gradient(to_bottom,#1d0033_0%,#28102c_33%,#201624_66%,#1d0033_100%)]
          ${archivo.variable} 
          font-[family-name:var(--font-archivo)]
          overflow-x-hidden
          antialiased
      `}>

        <Navbar/>
        
        <div         
          className={`
            min-h-dvh
            relative
            mx-8 lg:mx-20
            bg-[linear-gradient(to_bottom,#1d0033_0%,#28102c_33%,#201624_66%,#1d0033_100%)]
            ${archivo.variable} 
            font-[family-name:var(--font-archivo)]
            antialiased
        `}>
          {children}
        </div>
      </body>
    </html>
  );
}
