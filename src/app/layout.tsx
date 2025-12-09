import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { MartNavbar } from "@/components/layout/mart-navbar";
import { Footer } from "@/components/layout/footer";
import { MobileNav } from "@/components/layout/mobile-nav";
import { InteractionProvider } from "@/components/provider/interaction-provider";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ilm Mart | Premium Islamic Marketplace",
  description: "One-stop shop for Islamic books, lifestyle, and groceries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-gray-50 text-foreground font-sans flex min-h-screen flex-col`}
      >
        <InteractionProvider>
          <MartNavbar />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
        </InteractionProvider>
      </body>
    </html>
  );
}
