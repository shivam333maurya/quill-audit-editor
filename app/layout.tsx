import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

import { Layout } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quill Audit Editor",
  description: "Quill Editor cretaed by nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <body className={`${inter.className} bg-[#0D0F11]`}>
        <Layout />
        <div className="h-[calc(100vh-88px)] bg-[#0D0F11]`}>">{children}</div>
      </body>
    </html>
  );
}
