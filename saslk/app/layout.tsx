import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import ClientBody from "@/components/ClientBody";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SASLK",
  description:
    "Software Solutions & Digital Innovation",
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
        className={`${exo2.variable}`}
        style={{ fontFamily: "var(--font-exo2), sans-serif" }}
      >
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
