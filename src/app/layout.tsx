import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AlertDialog } from "@/components/ui/alert-dialog";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <header className="sticky top-3 main-container bg-transparent z-10">
            <Header />
          </header>
          <div className="night-sky relative flex min-h-screen">
            <div className="shooting-stars"></div>
            <div className="flex main-container">
              <main className="mt-32">{children}</main>
              <aside className="block flex-1 ml-4">
                <AppSidebar className="bg-white/10 text-white rounded-md backdrop-filter backdrop-blur-md" />
              </aside>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
