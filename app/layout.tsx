import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MK Manpower Solutions | Recruitment & Staffing",
    template: "%s | MK Manpower Solutions",
  },

  description:
    "MK Manpower Solutions provides reliable manpower, recruitment and staffing services for companies across multiple industries.",

  keywords: [
    "MK Manpower Solutions",
    "manpower solutions",
    "manpower supply",
    "staffing agency",
    "recruitment agency",
    "manpower consultancy",
    "blue collar staffing",
    "white collar recruitment",
    "security guard manpower",
    "factory workers",
    "warehouse staff",
    "hospital staff",
    "hotel staff",
    "Hapur manpower",
    "Ghaziabad manpower",
    "Noida manpower",
    "Uttar Pradesh manpower",
  ],

  authors: [
    {
      name: "MK Manpower Solutions",
    },
  ],

  creator: "MK Manpower Solutions",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    title: "MK Manpower Solutions | Recruitment & Staffing",
    description:
      "Connecting Right Talent with Right Opportunities.",
    type: "website",
    locale: "en_IN",
    siteName: "MK Manpower Solutions",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}