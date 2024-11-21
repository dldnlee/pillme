import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import RootStyle from "./components/RootStyle";
import "./globals.css";
import { usePathname } from "next/navigation";

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
  title: "Pill Me",
  description: "약 처방을 한번에",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

const mobileStyling = "mx-auto max-w-[500px] h-dvh overflow-y-auto bg-white no-scrollbar relative"
const pharmStyling = "w-screen h-screen"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="ko" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <RootStyle>
          {children}
        </RootStyle>
      </body>
    </html>
  );
}
