"use client";

import Image from "next/image";
import { Search, User, ShoppingBag } from "lucide-react";
import { Logo3, Logo8 } from "@/public/images";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeContext from "@/context/themeContext";
import { cn } from "@/lib/utils";
import { LocaleConfig } from "@/app/utils/constants/locales.constants";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { TLang } from "@/types/lang.type";
import { usePathname } from "next/navigation";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { setLanguage } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const langArray = Object.values(LocaleConfig.label);
  const activeLang = LocaleConfig.locales.filter(
    (key) => key === i18n.language,
  )[0];

  const { lang } = useParams<{ lang: TLang }>();
  const pathname = usePathname();
  const cleanPathname = pathname.replace(`/${lang}`, "") || "/";

  const menu = [
    { label: "Header.menu.home", path: "" },
    { label: "Header.menu.about", path: "about-us" },
    { label: "Header.menu.bespoke", path: "bespoke" },
    { label: "Header.menu.shop", path: "shop" },
    { label: "Header.menu.highlight", path: "highlight" },
    { label: "Header.menu.faqs", path: "faqs" },
  ];

  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="flex md:justify-between md:max-w-7xl mx-auto px-2 md:px-6 h-24">
          {/* LEFT - MENU (mobile) */}
          <button
            className="md:hidden text-zinc-700 w-8.75"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              fill="none"
              height="35"
              viewBox="0 0 35 35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 8.75033H30.625M13.125 17.5003H30.625M13.125 26.2503H24.7917M5.83333 10.2087C6.22011 10.2087 6.59104 10.055 6.86453 9.78152C7.13802 9.50803 7.29167 9.1371 7.29167 8.75033C7.29167 8.36355 7.13802 7.99262 6.86453 7.71913C6.59104 7.44564 6.22011 7.29199 5.83333 7.29199C5.44656 7.29199 5.07563 7.44564 4.80214 7.71913C4.52865 7.99262 4.375 8.36355 4.375 8.75033C4.375 9.1371 4.52865 9.50803 4.80214 9.78152C5.07563 10.055 5.44656 10.2087 5.83333 10.2087ZM5.83333 18.9587C6.22011 18.9587 6.59104 18.805 6.86453 18.5315C7.13802 18.258 7.29167 17.8871 7.29167 17.5003C7.29167 17.1136 7.13802 16.7426 6.86453 16.4691C6.59104 16.1956 6.22011 16.042 5.83333 16.042C5.44656 16.042 5.07563 16.1956 4.80214 16.4691C4.52865 16.7426 4.375 17.1136 4.375 17.5003C4.375 17.8871 4.52865 18.258 4.80214 18.5315C5.07563 18.805 5.44656 18.9587 5.83333 18.9587ZM5.83333 27.7087C6.22011 27.7087 6.59104 27.555 6.86453 27.2815C7.13802 27.008 7.29167 26.6371 7.29167 26.2503C7.29167 25.8636 7.13802 25.4926 6.86453 25.2191C6.59104 24.9456 6.22011 24.792 5.83333 24.792C5.44656 24.792 5.07563 24.9456 4.80214 25.2191C4.52865 25.4926 4.375 25.8636 4.375 26.2503C4.375 26.6371 4.52865 27.008 4.80214 27.2815C5.07563 27.555 5.44656 27.7087 5.83333 27.7087Z"
                stroke="#61677A"
                strokeLinecap="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </button>

          {/* SEARCH (desktop) */}
          <div className="hidden md:flex items-center gap-2 text-zinc-500">
            <Search size={24} />
            <input
              type="text"
              name="search"
              placeholder={t("common.button.search")}
              className="outline-none text-sm w-full placeholder:italic"
            />
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <Link href="/" className="flex justify-center items-center">
              {/* Mobile */}
              <Image
                src={Logo8}
                alt="Yaly Couture"
                priority
                className="md:hidden w-32 h-12.5 ml-10"
              />

              {/* Desktop */}
              <Image
                src={Logo3}
                alt="Yaly Couture"
                priority
                className="hidden md:block w-87.5 h-25"
              />
            </Link>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center ml-10 md:ml-0 gap-1 md:gap-6 text-zinc-600">
            {/* SEARCH ICON (mobile) */}
            <button
              className="md:hidden"
              onClick={() => setShowSearch(!showSearch)}
            >
              <Search size={24} />
            </button>

            <User size={26} className="cursor-pointer" />

            {/* CART */}
            <div
              className="relative cursor-pointer"
              onClick={() => router.push("/cart")}
            >
              <ShoppingBag size={26} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </div>

            {/* LANGUAGE (desktop) */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium">
              {langArray.map((item, idx) => (
                <span
                  className={cn(
                    activeLang === item.lng
                      ? "text-zinc-800"
                      : "hover:text-zinc-800 cursor-pointer",
                  )}
                  key={item.lng}
                  onClick={() => setLanguage(item.lng)}
                >
                  {idx !== 0 && <span className="text-zinc-400">|</span>}
                  {item.text}
                </span>
              ))}
            </div>

            <div className="md:hidden">
              <select
                name="Language"
                value={activeLang}
                onChange={(e) => setLanguage(e.target.value as TLang)}
              >
                {langArray.map((item) => (
                  <option key={item.lng} value={item.lng}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SEARCH INPUT (mobile dropdown) */}
        {showSearch && (
          <div className="md:hidden px-4 pb-4">
            <div className="flex items-center gap-2 border rounded px-3 py-2">
              <Search size={20} className="text-zinc-400" />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
        )}
      </div>

      {/* NAVBAR DESKTOP */}
      <nav className="hidden md:block bg-zinc-300">
        <ul className="max-w-7xl mx-auto px-6 flex items-center h-14 justify-center">
          {menu.map((item, index) => {
            const itemPath = item.path ? `/${item.path}` : "/";
            const isActive = cleanPathname === itemPath;

            return (
              <li key={index} className="h-full">
                <Link
                  href={`/${item.path}`}
                  className={`px-6 h-full flex items-center font-medium transition-colors
                        ${
                          isActive
                            ? "bg-orange-500 text-white"
                            : "text-zinc-700 hover:text-white hover:bg-orange-500"
                        }`}
                >
                  {t(item.label)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* NAVBAR MOBILE */}
      {showMenu && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col">
            {menu.map((item, index) => (
              <li key={index} className="border-b last:border-b-0">
                <Link
                  href={`/${item.path}`}
                  onClick={() => setShowMenu(false)}
                  className="block px-4 py-3 text-zinc-700 hover:bg-zinc-100 transition-colors"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
