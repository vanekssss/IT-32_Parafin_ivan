import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopNext",
  description: "Навчальний інтернет-магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            ShopNext
          </Link>

          <nav className="nav">
            <Link href="/">Головна</Link>
            <Link href="/catalog">Каталог</Link>
            <Link href="/form">Замовлення</Link>
          </nav>
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          ShopNext — навчальний проєкт Next.js
        </footer>
      </body>
    </html>
  );
}