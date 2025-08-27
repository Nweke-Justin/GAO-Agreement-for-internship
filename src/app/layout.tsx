import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "GAO's Agreement for Internship",
  description: "Offer and Agreement Letter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
