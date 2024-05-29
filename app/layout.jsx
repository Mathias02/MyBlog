
import FooterPage from "@/components/Footer";
import "./globals.css";
import HeaderPage from "@/components/Header";


export const metadata = {
  title: "My blog Next App",
  description: "Generated for portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderPage />
        <main className="max-w-7xl text-center h-[calc(100vh - 40%)]">
          {children}
        </main>
        <FooterPage />
      </body>
    </html>
  );
}
