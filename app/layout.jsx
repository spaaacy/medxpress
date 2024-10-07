import localFont from "next/font/local";
import "./globals.css";
import { UserProvider } from "@/context/UserContext";

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

export const metadata = {
  title: "MedXpress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
      </UserProvider>
    </html>
  );
}