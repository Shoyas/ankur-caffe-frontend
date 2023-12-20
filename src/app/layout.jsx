import { Roboto } from "next/font/google";
import "./globals.css";
import HeaderComponent from "../components/layout/HeaderComponent";
import FooterComponent from "../components/layout/FooterComponent";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Ankur Caffee",
  description: "Ankur Group",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-7xl border mx-auto p-4">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </main>
      </body>
    </html>
  );
}
