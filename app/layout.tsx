import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CORPROS GROUP | Votre succès, notre mission",
  description: "Ensemble, révélons le potentiel de votre entreprise et construisons sa croissance durable.",
  icons: {
    icon: [
      { url: '/logos/favicon/favicon.ico' },
      { url: '/logos/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/logos/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/logos/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/logos/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-[#262626] text-white selection:bg-white selection:text-black relative`}
      >
        <ScrollProgress />
        <div className="relative z-10">
          <Header />
          <main className="pt-20">
            <PageTransition>
        {children}
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
