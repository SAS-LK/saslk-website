import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ClientBody from "@/components/ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SASLK | Software Solutions & Digital Innovation",
  description:
    "SASLK delivers cutting-edge software development, cloud solutions, and digital transformation services. We build scalable, modern applications that drive business growth.",
  keywords: [
    "software development",
    "digital transformation",
    "cloud solutions",
    "web development",
    "mobile apps",
    "SASLK",
  ],
  openGraph: {
    title: "SASLK | Software Solutions & Digital Innovation",
    description:
      "We build scalable, modern applications that drive business growth.",
    type: "website",
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
        className={`${inter.variable} ${outfit.variable}`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
