import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/shared/CustomCursor";
import PageTransition from "@/components/shared/PageTransition";
import { Toaster } from "sonner";
import StarsBackground from "@/components/shared/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name | Digital Canvas",
  description: "Your professional portfolio showcasing modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-black text-foreground antialiased selection:bg-primary selection:text-primary-foreground relative"
        )}
      >
        {/* Stars Background */}
        <StarsBackground />
        {/* Foreground Content */}
        <div className="relative z-10">
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <Toaster richColors position="top-right" />
        </div>
      </body>
    </html>
  );
}