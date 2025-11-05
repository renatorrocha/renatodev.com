import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/providers/themes-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { routing } from "@/services/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Snowfall from "react-snowfall";
import SnowFall from "@/components/snow-fall";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato Rocha | Frontend & Mobile Developer",
  description:
    "Portfolio of Renato Rocha, a software developer specializing in Frontend and Mobile development. Expert in React, Next.js, TypeScript, and Android development.",
  keywords: [
    "Renato Rocha",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Android Developer",
    "Web Development",
    "Software Engineer",
    "Brazil Developer",
  ],
  authors: [{ name: "Renato Rocha", url: "https://renatodev.com" }],
  creator: "Renato Rocha",
  publisher: "Renato Rocha",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    title: "Renato Rocha | Frontend & Mobile Developer",
    description:
      "Explore the portfolio of Renato Rocha, a developer specialized in creating amazing experiences on web and mobile platforms using React, Next.js, and Android.",
    url: "https://renatodev.com",
    siteName: "Renato Rocha Portfolio",
    images: [
      {
        url: "/project-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Renato Rocha - Frontend & Mobile Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renato Rocha | Frontend & Mobile Developer",
    description:
      "Frontend & Mobile developer specialized in React, Next.js, and Android development.",
    images: ["/project-screenshot.png"],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="google-site-verification"
          content="zaHfJlY0IXdmPkqIWgyJD0Fjh31bj62sYNyVF4GPGnQ"
        />
      </head>
      <body
        className={cn(
          inter.className,
          "mx-auto min-h-screen max-w-4xl overflow-x-hidden bg-background px-6 py-12 font-sans antialiased sm:py-16",
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <TooltipProvider delayDuration={0}>
              {children}

              <SnowFall />

              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
