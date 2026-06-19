import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sparks Intelligence",
  description:
    "High-fidelity intelligence infrastructure for risk, credit, and due diligence functions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      {/* 1. We change min-h-full to min-h-screen here */}
      <body className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* 2. We wrap {children} in this main tag to push the footer down on ALL pages */}
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}