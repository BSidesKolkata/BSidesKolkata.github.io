import localFont from "next/font/local";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const protestGourrilla = localFont({
  src: "../fonts/ProtestGuerrilla-Regular.woff",
  variable: "--font-protestG-regular",
  weight: "100 900",
});

const protestLight = localFont({
  src: "../fonts/ProtestLight.woff",
  variable: "--font-protestG-light",
  weight: "400 500 600",
});

export const metadata = {
  title: "BSides",
  description:
    "Welcome to BSides Kolkata, Eastern India's largest Security Conference",
  keywords: "Next.js, Tailwind CSS, Heroicons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${protestGourrilla.variable} ${protestLight.variable} antialiased bg-black`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
