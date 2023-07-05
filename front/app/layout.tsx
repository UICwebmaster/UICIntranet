import "./styles/globals.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Tab from "./components/Tab/Tab";
import Menu from "./components/Menu/Menu";
import Navbar2 from "./components/Navbar2/Navbar";

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
      <body>
        <div>
          <Navbar2 />
        </div>

        <div className="container mx-auto" style={{ marginBottom: "100px" }}>
          {children}
        </div>

        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
