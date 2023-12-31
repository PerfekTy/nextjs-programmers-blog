import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/app/utils/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "@/redux/provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: {
    template: "%s | PB",
    default: "Programmers Blog",
  },
  description:
    "Programmers blog was built by developers to developers from around the world which includes all facts and interesting new features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        baseTheme: dark,
        layout: {
          logoImageUrl: "/assets/logos/clerk-logo.png",
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ReduxProvider>
            <Toaster />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
