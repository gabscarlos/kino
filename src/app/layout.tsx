import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "@/components/templates/Cabecalho";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kino",
  description: "Aplicação de Filmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} w-full`}>
        <Cabecalho />
        {children}
      </body>
    </html>
  );
}
