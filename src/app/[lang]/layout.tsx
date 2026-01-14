import type { Metadata } from "next";
import "./globals.css";
import { i18n, Locale } from "../utils/i18n-config";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Yaly Couture",
  description: "Yaly Couture",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <body>
        <Providers lang={params.lang}>{children}</Providers>
      </body>
    </html>
  );
}
