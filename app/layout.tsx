import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ওই | Spontaneous Greetings",
  description: "একটি ছোট্ট অভিজ্ঞতা যা বন্ধুসুলভ সম্ভাষণকে উদযাপন করে।"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
