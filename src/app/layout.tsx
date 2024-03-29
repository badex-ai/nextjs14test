import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";



const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Nextjs text",
  description: "A nextjs test application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <Container>
        <Header/>
        { children}
        <Footer />
      </Container>
        
        </body>
    </html>
  );
}
