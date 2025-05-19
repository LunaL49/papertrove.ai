import { Inter } from "next/font/google";
import Header from "./_components/Header";
import "./globals.css";
import bg from "@/public/bg.png";
import Image from "next/image";

const sans = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Papertrove.ai",
  description:
    "AI-enabled service delivering the newest scientific research to your inbox, all tailored to your scientific interests. 100% free.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="relative flex-1 px-12 py-6 grid overflow-hidden">
          <Image
            src={bg}
            alt="Background"
            fill
            priority
            className="object-cover -z-10"
          />

          <div className="absolute inset-0 bg-white/40 -z-10" />

          <main className="flex max-w-7xl mx-auto w-full relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
