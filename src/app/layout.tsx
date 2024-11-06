import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./core/layouts/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Verses",
  description: "Simple app for verses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-3 `}
      >
        <header className="sticky top-3 main-container bg-transparent z-10">
          <Header />
        </header>
        <div className="night-sky relative">
          <div className="shooting-stars"></div>
          <main className="main-container">{children}</main>
        </div>
      </body>
    </html>
  );
}
