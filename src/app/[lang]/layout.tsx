import type { Metadata } from "next";
import "./globals.css";
import { LocaleConfig } from "../utils/constants/locales.constants";
import { Providers } from "./Providers";
import { TLang } from "@/types/lang.type";
import LandingPageLayout from "./feature/LandingPage/layout/LandingPageLayout";

export const metadata: Metadata = {
  title: "Yaly Couture",
  description: "Yaly Couture",
};

export async function generateStaticParams() {
  return LocaleConfig.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: TLang }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <body>
        <Providers lang={params.lang}>
          <LandingPageLayout>{children}</LandingPageLayout>
        </Providers>
      </body>
    </html>
  );
}
