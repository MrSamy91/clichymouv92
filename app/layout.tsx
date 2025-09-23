import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Lora, Merriweather } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import NavbarVertical from "@/components/navbar-vertical";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Polices personnalisées avec Google Fonts
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClichyMouv - Association de mouvement et bien-être",
  description: "Association de mouvement et de bien-être à Clichy-la-Garenne. Activités sportives et de loisirs pour tous les âges.",
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: "ClichyMouv - Association de mouvement et bien-être",
    description: "Association de mouvement et de bien-être à Clichy-la-Garenne. Activités sportives et de loisirs pour tous les âges.",
    url: "https://clichymouv.fr",
    siteName: "ClichyMouv",
    images: [
      {
        url: "/logo-clichy-mouv2.webp",
        width: 1200,
        height: 630,
        alt: "Logo ClichyMouv - Association de mouvement et bien-être à Clichy-la-Garenne",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClichyMouv - Association de mouvement et bien-être",
    description: "Association de mouvement et de bien-être à Clichy-la-Garenne. Activités sportives et de loisirs pour tous les âges.",
    images: ["/logo-clichy-mouv2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${lora.variable} ${merriweather.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <NavbarVertical />        
          <main className="md:ml-20 pt-20 md:pt-0 flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <GoogleAnalytics 
          gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} 
          debugMode={process.env.NODE_ENV === 'development'}
        />
      </body>
    </html>
  );
}
