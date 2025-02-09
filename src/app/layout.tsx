import type { Metadata } from "next";
import localFont from "next/font/local";
import "./styles/globals.css";
import Background from './components/Background';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Uniwhale",
  description: "next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head/>
      <body className={` bg-cover ${geistSans.variable} ${geistMono.variable}`}>
        <Background />
        {children}
      </body>

    </html>
  );
}
