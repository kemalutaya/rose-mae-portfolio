import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const description = `${profile.bio} HIPAA certified, based in ${profile.location}, aligned to U.S. business hours.`;
const title = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://rose-mae-portfolio.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", images: ["/rose-mae.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/rose-mae.jpg"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="font-sans flex min-h-full flex-col bg-canvas">
        {children}
      </body>
    </html>
  );
}
