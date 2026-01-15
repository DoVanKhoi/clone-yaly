import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LocaleConfig } from "./app/utils/constants/locales.constants";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { TLang } from "./types/lang.type";

function getLocale(request: NextRequest): string | undefined {
  // 1. Check cookie first
  const cookieLang = request.cookies.get("lng")?.value as TLang;
  if (cookieLang && LocaleConfig.locales.includes(cookieLang)) {
    return cookieLang;
  }

  // 2. Fallback to Accept-Language header
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = Array.from(LocaleConfig.locales);

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, LocaleConfig.defaultLocale);

  return locale;
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = LocaleConfig.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // use with cookie above, it follows the current user language
    // e.g. incoming request is /products
    // The new URL is now /en/products
    // if user current lang is vi, it will be /vi/products
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
