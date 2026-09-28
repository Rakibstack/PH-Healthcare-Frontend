import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Providers from "@/providers";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PH Healthcare",
    template: "%s | PH Healthcare",
  },
  description:
    "A modern healthcare and telemedicine platform for discovering doctors, booking appointments, online consultations, and managing digital prescriptions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Providers>
          {children}
          <Toaster richColors position="top-right"></Toaster>
        </Providers>
      </body>
    </html>
  );
}
