
import "./globals.css";


export const metadata = {
  title: "My blog Next App",
  description: "Generated or portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
