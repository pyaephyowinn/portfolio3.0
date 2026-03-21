import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import { AudioProvider } from "@/components/layout/AudioProvider";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pyae Phyo Win | Full Stack Developer",
  description: "Full Stack Developer with 3+ years of experience in TypeScript, React, Node.js, and AWS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} dark`}>
      <body className="min-h-screen">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
