import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import SideBar from "@/components/Layouts/SideBar";
import ReactQueryProviders from "@/utils/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "earthcake",
  description: "국내/외 지진관련 정보 제공",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProviders>
          <Header />
          <SideBar />
          <main className="w-full pl-64 pr-4 py-20">{children}</main>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
