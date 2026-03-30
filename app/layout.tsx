import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleLabs — Stop Losing Jobs to Missed Calls",
  description:
    "AI-powered call recovery for HVAC, plumbing, and electrical businesses. Automatically answer, qualify, and book leads from every missed call. Start recovering lost revenue today.",
  keywords: [
    "missed call recovery",
    "AI receptionist",
    "home service business",
    "HVAC leads",
    "plumbing leads",
    "electrical leads",
    "AI call answering",
    "lead capture",
    "appointment booking",
  ],
  openGraph: {
    title: "ScaleLabs — Stop Losing Jobs to Missed Calls",
    description:
      "AI-powered call recovery for home service businesses. Never lose a job to a missed call again.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleLabs — Stop Losing Jobs to Missed Calls",
    description:
      "AI-powered call recovery for home service businesses. Never lose a job to a missed call again.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
