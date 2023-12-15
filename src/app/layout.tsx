import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Provider from "@/SessionProvider";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/components/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Delivery Service",
  description: "Quality Meal for healthy living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="max-w-[100%] mx-auto p-4">
          <AppProvider>
            {/* <Provider> */}
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy; 2023 All rights reserved
            </footer>
            {/* </Provider> */}
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
