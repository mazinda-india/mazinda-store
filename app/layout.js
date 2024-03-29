import { Quicksand } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/provider/NextAuthProvider";

const quicksand = Quicksand({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Store - Mazinda",
  description: "Mazinda store end",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
