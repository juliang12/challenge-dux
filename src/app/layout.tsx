import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/themes/primeone-light.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import { UserModalProvider } from "@/context/UserModalContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Usuarios",
  description: "Libro diario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} p-0 m-0`}>
        <PrimeReactProvider>
          <UserModalProvider>
            <Navbar />
            <div className="flex flex-row">
              <Sidebar />
              <div className="flex flex-col w-full">{children}</div>
            </div>
          </UserModalProvider>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
