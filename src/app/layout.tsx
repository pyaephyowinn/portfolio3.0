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
  description:
    "Full Stack Developer with 3+ years of experience building scalable web applications using TypeScript, React, Node.js, and AWS. Experienced in fintech, travel, and AI-powered platforms.",
  keywords: [
    "Pyae Phyo Win",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Pyae Phyo Win" }],
  creator: "Pyae Phyo Win",
  metadataBase: new URL("https://www.pyaephyowin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Pyae Phyo Win | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years of experience in TypeScript, React, Node.js, and AWS.",
    url: "https://www.pyaephyowin.com",
    siteName: "Pyae Phyo Win",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Pyae Phyo Win | Full Stack Developer",
    description:
      "Full Stack Developer with 3+ years of experience in TypeScript, React, Node.js, and AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
