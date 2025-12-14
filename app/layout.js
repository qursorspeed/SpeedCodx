import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ['400', '500', '700', '900'] });

export const metadata = {
  title: "SpeedCodx | Professional Website Development Agency",
  description: "Fast, clean, and scalable digital solutions. SpeedCodx builds modern websites that grow your business.",
  keywords: "website development agency, professional web developer, business website services, fast website development, SpeedCodx agency",
};

export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SpeedCodx",
    "url": "https://speedcodx.com",
    "description": "Fast, clean, and scalable digital solutions. SpeedCodx builds modern websites that grow your business.",
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
