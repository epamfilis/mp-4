import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "ArtSearch Random Gallery",
  description: "Random Artwork",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <header className="mx-auto w-fit text-3xl mb-2 mt-4 ">
                    <nav>
                        <Link className="m-5 px-4 border bg-amber-100" href="/">Home</Link>
                        <Link className="m-5 px-4 border bg-amber-100" href="/about">About</Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
