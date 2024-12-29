import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderThree from "@/components/HeaderThree";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desain konstruksi",
  description: "Jasa Rancang dan konstruksi Bangunan impian anda",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderThree />
        {children}
      </body>
    </html>
  );
}
