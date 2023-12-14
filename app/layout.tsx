import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S3MER",
  description: "S3MER is a live streaming platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            enableSystem
            defaultTheme="system"
            storageKey="s2mer-theme"
            disableTransitionOnChange
          >
            <Toaster
              invert
              richColors
              closeButton
              containerAriaLabel="Toaster"
              position="bottom-center"
            />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
