import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Menu from "@/app/components/Menu/Menu";
import Tab from "./app/components/Tab/Tab";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intranet",
  description: "Request Form",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Tab />
        {children}

        <Footer />
      </body>
    </html>
  );
}
