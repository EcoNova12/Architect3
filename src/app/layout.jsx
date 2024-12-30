import { Geist, Geist_Mono, Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import HeaderThree from "@/components/HeaderThree";

const nunitoSans = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight:["300","400","700"],
});


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
      <body className={`${nunitoSans.variable} antialiased`}>
        <HeaderThree />
        {children}
      </body>
    </html>
  );
}

// ${geistSans.variable} ${geistMono.variable}