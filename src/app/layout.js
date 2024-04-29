
import "./globals.css";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { FilterProvider } from "./providers/FilterProvider/FilterProvider";
export const metadata = {
  title: "Ned Com",
  description: "Ned Com Imobiliare - Agentie imobiliara",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <FilterProvider >
      <body className="custom-body-class">
      <NavBar />
      {children}
      <Footer />
      </body>
      </FilterProvider>
    </html>
    
  );
}
