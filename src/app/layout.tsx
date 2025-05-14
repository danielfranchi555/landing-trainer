import type { Metadata } from "next";
import "./globals.css";
import { Header1 } from "./components/NavBar/NavBar";
import { Oxanium, Outfit } from "next/font/google";
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"], // ← agregá "800"
  variable: "--font-oxanium",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-outfit", // ← nombre distinto
});

export const metadata: Metadata = {
  title: "Clases de Pádel con Martin Chaig | Instructor Profesional en Italia",
  description:
    "Entrená pádel con Martin Chaig, instructor profesional con más de 8 años de experiencia. Clases personalizadas en Italia para todos los niveles.",
  keywords: [
    "clases de pádel",
    "martin chaig",
    "pádel en Italia",
    "entrenador de pádel",
    "padel coach",
  ],
  authors: [{ name: "Martin Chaig" }],
  creator: "Martin Chaig",
  metadataBase: new URL("https://www.martinchaig.com"),
  openGraph: {
    title:
      "Clases de Pádel con Martin Chaig | Instructor Profesional en Italia",
    description:
      "Reservá tus clases de pádel con Martin Chaig. Más de 8 años entrenando jugadores de todos los niveles en Italia.",
    url: "https://www.martinchaig.com",
    siteName: "Martin Chaig Pádel",
    locale: "es_IT",
    type: "website",
    images: [
      {
        url: "/image-optimazed.png", // si lo ponés en la carpeta public
        width: 1200,
        height: 630,
        alt: "Martin Chaig dando clases de pádel",
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
      <body
        className={`${outfit.variable} ${oxanium.variable} font-outfit antialiased`}
      >
        <Header1 />
        {children}
      </body>
    </html>
  );
}
