import type { Metadata } from "next";
import { Bodoni_Moda, Exo_2, Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const exo = Exo_2({ subsets: ["latin"], weight: ["400", "700"] });
const Bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Orchidaceae",
  description: "Online Flower Store crafted by Haji",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="/Icons/titleIcon.png" />
      </Head>
      <html lang="en">
        <body className={`${exo.className} customScroll`}>
          <AuthProvider>
            <App> {children}</App>
          </AuthProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
        </body>
      </html>
    </>
  );
}
