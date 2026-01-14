'use client';

import Image from "next/image";
import { Search, User, ShoppingBag, Menu } from "lucide-react";
import { Logo2 } from "@/public/images";
import { useState } from "react";

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="w-full">
            {/* TOP BAR */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 h-24 grid grid-cols-3 items-center">

                    {/* LEFT - MENU (mobile) */}
                    <button
                        className="md:hidden text-zinc-700"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <Menu size={26} />
                    </button>

                    {/* SEARCH (desktop) */}
                    <div className="hidden md:flex items-center gap-2 text-zinc-500">
                        <Search size={24} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="outline-none text-sm w-full placeholder:italic"
                        />
                    </div>

                    {/* LOGO */}
                    <div className="flex justify-center">
                        <Image
                            src={Logo2}
                            alt="Yaly Couture"
                            width={120}
                            height={36}
                            priority
                        />
                    </div>

                    {/* RIGHT ICONS */}
                    <div className="flex justify-end items-center gap-6 text-zinc-600">

                        {/* SEARCH ICON (mobile) */}
                        <button
                            className="md:hidden"
                            onClick={() => setShowSearch(!showSearch)}
                        >
                            <Search size={24} />
                        </button>

                        <User size={26} className="cursor-pointer" />

                        {/* CART */}
                        <div className="relative cursor-pointer">
                            <ShoppingBag size={26} />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                0
                            </span>
                        </div>

                        {/* LANGUAGE (desktop) */}
                        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
                            <span className="text-zinc-800">VN</span>
                            <span className="text-zinc-400">|</span>
                            <span className="hover:text-zinc-800 cursor-pointer">EN</span>
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
                    <li className="bg-orange-500 text-white px-6 h-full flex items-center font-medium">
                        TRANG CHỦ
                    </li>
                    {["VỀ YALY", "MAY ĐO", "MUA SẮM", "NỔI BẬT", "FAQS"].map((item, index) => (
                        <li
                            key={index}
                            className="px-6 h-full flex items-center text-zinc-700 hover:text-white hover:bg-orange-500 font-medium cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* NAVBAR MOBILE */}
            {showMenu && (
                <div className="md:hidden bg-white border-t">
                    <ul className="flex flex-col">
                        {["TRANG CHỦ", "VỀ YALY", "MAY ĐO", "MUA SẮM", "NỔI BẬT", "FAQS"].map(
                            (item, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-3 border-b text-zinc-700 hover:bg-zinc-100 cursor-pointer"
                                >
                                    {item}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </header>
    );
}
