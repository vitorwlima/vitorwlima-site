import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitor Lima",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn(
          nunito.variable,
          "min-h-screen bg-zinc-900 text-zinc-50 font-nunito antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
