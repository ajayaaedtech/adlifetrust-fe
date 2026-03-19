import { Geist, Geist_Mono } from "next/font/google";
// import { Dancing_Script } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";

// const dancing = Dancing_Script({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
// });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AD Life Trust ",

  description:
    "AD Life Trust is a non-profit organization focused on mental health awareness, education support, livelihood programs, and humanitarian aid across India. Join our initiatives to create real impact.",

  keywords: [
    "AD Life Trust",
    "NGO in India",
    "mental health NGO India",
    "education NGO India",
    "livelihood programs NGO",
    "humanitarian aid India",
    "mental health awareness Hyderabad",
    "NGO activities India",
    "non profit organization India",
    "community support NGO",
    "mental wellness programs India",
    "charity organization India"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen "  >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
