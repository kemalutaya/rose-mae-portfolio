import type { Metadata } from "next";
import { DM_Sans, Sora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });
const sora = Sora({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Rose Mae Alipan | Medical Virtual Assistant",
  description: "Rose Mae Alipan supports healthcare teams with insurance verification, prior authorizations, claims, patient scheduling, and medical documentation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${dmSans.variable} ${sora.variable}`}><body>{children}</body></html>;
}
