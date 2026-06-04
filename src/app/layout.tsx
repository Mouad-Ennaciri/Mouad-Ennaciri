import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mouad Ennaciri — Front-End React & Next.js Developer",
  description:
    "Self-taught Front-End Developer from Marrakech, Morocco. Specializing in React, Next.js, TypeScript, and GSAP animations. Available for freelance and full-time.",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js",
    "Morocco",
    "Marrakech",
    "GSAP",
    "TypeScript",
    "Tailwind CSS",
    "Self-taught developer",
    "Web Developer Morocco",
  ],
  authors: [{ name: "Mouad Ennaciri" }],
  openGraph: {
    title: "Mouad Ennaciri — Front-End React & Next.js Developer",
    description:
      "Self-taught Front-End Developer from Marrakech, Morocco. Specializing in React, Next.js, TypeScript, and GSAP animations. Available for freelance and full-time.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouad Ennaciri — Front-End React & Next.js Developer",
    description:
      "Self-taught Front-End Developer from Marrakech, Morocco. Specializing in React, Next.js, TypeScript, and GSAP animations. Available for freelance and full-time.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
