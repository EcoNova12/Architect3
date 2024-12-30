import { Geist, Geist_Mono, Nunito_Sans, Signika_Negative } from "next/font/google";
import "./globals.css";
import HeaderThree from "@/components/HeaderThree";

const nunitoSans = Nunito_Sans({
  variable: " --font-nunito-sans",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
});

const SignikaNegative = Signika_Negative({
  variable: "--font-signika-negative",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "400", "700"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} ${SignikaNegative.variable} antialiased`}
      >
        <HeaderThree />
        {children}
      </body>
    </html>
  );
}

// 