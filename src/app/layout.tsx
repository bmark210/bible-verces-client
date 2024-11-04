import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="relative block p-5">
          <div className="block p-5">
            <div className="w-full block px-2 py-3 border border-white rounded-lg border-solid">
              <button className="text-white text-2xl">Create new</button>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
