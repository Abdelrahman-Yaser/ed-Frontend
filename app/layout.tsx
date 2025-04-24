import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./header/page";



const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Education",
  description: "Education is the key to success",
};

export default function RootLayout({ children,}: Readonly<{children: React.ReactNode;}>){
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>


    <Navbar />
    {children}
  </body>
    </html>
  );
}
