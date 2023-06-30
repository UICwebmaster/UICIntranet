import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Tab from "./components/Tab/Tab";
import Menu from "./components/Menu/Menu";
import Navbar2 from "./components/Navbar2/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intranet",
  description: "Request Forms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar2 />
        {/* <Tab /> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
