import type { Metadata } from "next";
import { Inter, Moirai_One } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import InversionLens from "@/components/ui/InversionLens";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const moirai = Moirai_One({
  weight: "400",
  variable: "--font-moirai",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ManiTechZ | Manifest Technology. Zero Limits.",
  description: "We build intelligent digital platforms using modern web technologies, scalable architecture and cutting-edge AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${moirai.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground tracking-tight transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <InversionLens />
        </ThemeProvider>
      </body>
    </html>
  );
}
