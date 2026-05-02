import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zainiddin Zidan | Frontend Developer",
  description: "Portfolio of Zainiddin Zidan, Frontend Developer & Linux Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-sans overflow-x-hidden selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
