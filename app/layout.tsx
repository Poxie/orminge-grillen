import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Orminge Grillen",
  description: "Orminges godaste hamburgare, kebab, tunnbrödsrullar, korv, glass, smårätter och mer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
