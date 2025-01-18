import type { Metadata } from "next";
import { Dosis, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/navigation/header";
import { Footer } from "@/components/layout/footer";

const dosisSans = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito",
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
        className={`${dosisSans.variable} ${nunitoSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
