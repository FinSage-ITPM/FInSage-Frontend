import { Geist, Geist_Mono } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const abrilFatface = Abril_Fatface({
  weight:"400",
  variable: "--font-abril-fatface",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${abrilFatface.variable} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
