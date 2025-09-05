import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LendSqr",
  description:
    "Lendsqr is a platform that helps lenders launch, scale and manage their loan businesses across multiple channels and markets. It offers features such as origination, decisioning, approval, disbursement, collections, and lending APIs at a fraction of the cost and time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <div id="portal-root"></div> {/* portal target */}
        <div id="form-root"></div>{" "}
      </body>
    </html>
  );
}
