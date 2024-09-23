import localFont from "next/font/local";
import "./globals.css";
import {Inter} from 'next/font/google'
import Head from "next/head";
import Header from "@/components/header";

export const metadata = {
  title: "Schedulrr",
  description: "Meeting Scheduling App",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
          <Header/>
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">{children}</main>
          <footer className="bg-blue-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with Shiruvati Narasimha</p>
            </div>
          </footer>
      </body>
    </html>
  );
}
