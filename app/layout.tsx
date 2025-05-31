import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KAPSUL",
  // manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "favicon/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "favicon/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "favicon/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
