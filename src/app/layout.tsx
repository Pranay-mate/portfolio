import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    "Pranay Mate",
    "Full Stack Developer",
    "TypeScript",
    "Next.js",
    "Node.js",
    "Hudle",
    "Mumbai",
    "fintech developer",
    "portfolio",
  ],
  openGraph: {
    type: "profile",
    locale: SITE.ogLocale,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.tagline,
  },
  formatDetection: { email: false, address: false, telephone: false },
  verification: {
    google: "ga1q4935lhARuEDp7njIoXyQse7xl5ZnVsoKQ47T4PI",
  },
};

export const viewport: Viewport = {
  themeColor: "#12161f",
  width: "device-width",
  initialScale: 1,
};

// Runs before paint: applies a saved light-theme choice so there's no flash.
// Dark is the default (no data-theme attribute needed).
const themeInit = `(function(){try{if(localStorage.getItem("theme")==="light"){document.documentElement.dataset.theme="light";}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* eslint-disable-next-line react/no-danger */}
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
