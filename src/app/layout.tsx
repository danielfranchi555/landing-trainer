import type { Metadata } from "next";
import "./globals.css";
import { Header1 } from "./components/NavBar/NavBar";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-outfit", // ← nombre distinto
});

export const metadata: Metadata = {
  title:
    "Lezioni di Padel con Martin Chaig | Istruttore Professionista in Italia",
  description:
    "Allena il tuo padel con Martin Chaig, istruttore professionista con oltre 8 anni di esperienza. Lezioni personalizzate in Italia per tutti i livelli.",
  keywords: [
    "lezioni di padel",
    "martin chaig",
    "padel in italia",
    "allenatore di padel",
    "padel coach",
  ],
  authors: [{ name: "Martin Chaig" }],
  creator: "Martin Chaig",
  metadataBase: new URL("https://www.martinchaig.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Lezioni di Padel con Martin Chaig | Istruttore Professionista in Italia",
    description:
      "Prenota le tue lezioni di padel con Martin Chaig. Oltre 8 anni di esperienza nell'allenamento di giocatori di tutti i livelli in Italia.",
    url: "https://www.martinchaig.com",
    siteName: "Martin Chaig Padel",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/image-optimazed.png",
        width: 1200,
        height: 630,
        alt: "Martin Chaig mentre tiene una lezione di padel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable}  font-outfit antialiased`}>
        <Header1 />
        {children}
      </body>
    </html>
  );
}
