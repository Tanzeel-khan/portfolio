import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseCursor from "./components/MouseCursor";
import AnimationProvider from "./components/AnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tanzeel ur Rehman | Senior Software Engineer",
  description:
    "Senior Software Engineer with 5+ years of experience in React, Next.js, TypeScript, and AI Automation. Based in Karachi, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <MouseCursor />
        <AnimationProvider />
        {children}
      </body>
    </html>
  );
}
