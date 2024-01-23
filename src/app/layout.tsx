import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Provider from "@/SessionProvider";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/components/AppContext";
import Footer from "@/components/Footer";

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
        <main className="max-w-[100%] mx-auto px-4 min-h-screen">
          <AppProvider>
            {/* <Provider> */}
            <Toaster />
            <Header />
            {children}
            {/* </Provider> */}
          </AppProvider>
        </main>    
        <Footer/>    
      </body>
    </html>
  );
}
