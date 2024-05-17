import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bazaar | Electronics, Cars, Fashion, Collectibles & More",
  description:
    "Buy & sell electronics, cars, clothes, collectibles & more on Bazaar, the world's online marketplace. Top brands, low prices & free shipping on many items.",
};

// Providers
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster as ToastProvider } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={GeistSans.className}>
          <ToastProvider richColors />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
