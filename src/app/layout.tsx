import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/navigation/header";
import { Footer } from "@/components/layout/footer";

const dosisSans = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

const dosisMono = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockBuster - Film Review & Movie Database",
  description: "BlockBuster is a movie database and review platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dosisSans.variable} ${dosisMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
