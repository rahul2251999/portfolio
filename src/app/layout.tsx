import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Podugu — Software Engineer",
  description: "Backend & distributed systems engineer. Payment rails, AI analytics, and calm architectures.",
  themeColor: "#000000",
  openGraph: {
    type: "website",
    url: "https://rahul2251999.github.io/portfolio",
    title: "Rahul Podugu — Software Engineer",
    description: "Backend & distributed systems engineer. Payment rails, AI analytics, and calm architectures.",
    siteName: "Rahul Podugu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Podugu — Software Engineer",
    description: "Backend & distributed systems engineer. Payment rails, AI analytics, and calm architectures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
