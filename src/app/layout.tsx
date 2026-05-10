import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daye — AI-Native Conversational DJ & Producer",
  description:
    "Daye is an AI-native music specialist that deeply understands music, emotion, and vibe. Tell it what you feel. It builds the session.",
  keywords: ["AI music", "AI DJ", "conversational music", "Afrobeats", "Amapiano", "music intelligence"],
  openGraph: {
    title: "Daye — The Future of Music is Conversational",
    description: "An AI-native conversational DJ & producer that deeply understands music, emotion, and vibe.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daye — AI-Native Conversational DJ",
    description: "Tell it what you feel. It builds the session.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-daye-bg text-white antialiased">{children}</body>
    </html>
  );
}
