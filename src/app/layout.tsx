import type { Metadata } from "next";
import { Kurale } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import ToasterContext from "@/context/ToastContext";

const font = Kurale({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Dev Prasad Sethi",
  description: "Portfolio of a web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </head>
      <body className={font.className}>
        <NextTopLoader
          color="#7C3AED"
          crawlSpeed={200}
          height={4}
          crawl={false}
          showSpinner={false}
          easing="ease"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToasterContext />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
