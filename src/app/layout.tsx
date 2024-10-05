import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import type { Metadata } from "next";

import { Roboto } from "next/font/google";

import theme from "./theme";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Expenzen",
  description: "Expenzen is a personal finance management app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ThemeProvider theme={theme}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
