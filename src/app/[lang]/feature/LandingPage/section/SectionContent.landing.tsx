"use client";

import { ImgContent1 } from "@/public/images";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { Trans, useTranslation } from "react-i18next";

const products = [
  {
    image: ImgContent1.src,
    name: "ĐẦM DÀI 2 DÂY CỔ V VẠT XÉO",
    price: "3.770.000 đ",
    likes: 20,
  },
  {
    image: ImgContent1.src,
    name: "ĐẦM LỤA CỔ ĐỔ",
    price: "3.450.000 đ",
    likes: 15,
  },
  {
    image: ImgContent1.src,
    name: "ĐẦM LỤA CỔ ĐỔ",
    price: "3.450.000 đ",
    likes: 15,
  },
  {
    image: ImgContent1.src,
    name: "ĐẦM LỤA CỔ ĐỔ",
    price: "3.450.000 đ",
    likes: 15,
  },
  {
    image: ImgContent1.src,
    name: "ĐẦM LỤA CỔ ĐỔ",
    price: "3.450.000 đ",
    likes: 15,
  },
  {
    image: ImgContent1.src,
    name: "ĐẦM LỤA CỔ ĐỔ",
    price: "3.450.000 đ",
    likes: 15,
  },
];

export default function SectionContentLanding() {
  const { t } = useTranslation();

  return (
    <>
      <div className="container ml-auto mr-auto">
        <div className="mx-4 md:mx-32 px-2 md:px-24 py-12">
          <div className="flex">
            {/* IMAGE */}
            <div className="w-1/2 overflow-hidden mr-4">
              <Image
                src={ImgContent1}
                alt="Content Image"
                width={380}
                height={570}
              />
            </div>

            {/* CONTENT */}
            <div className="w-1/2 text-zinc-700">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 wrap-break-word">
                {t("LandingPage.SectionContent.content.title")}
              </h2>

              <p className="text-[1.1rem] md:text-md leading-relaxed mb-6 wrap-break-word line-clamp-9 md:line-clamp-none text-ellipsis">
                <Trans
                  i18nKey={"LandingPage.SectionContent.content.content"}
                  values={{
                    number: 300,
                  }}
                  components={{
                    strong: <strong />,
                    first: <u />,
                    second: <u />,
                    third: <span className="text-[#f58634]" />,
                  }}
                />
              </p>

              <a
                href="#"
                className="inline-block text-base md:text-md font-medium uppercase text-white bg-orange-400 px-6 py-3 rounded hover:bg-orange-500 transition"
              >
                XEM THÊM
              </a>
            </div>
          </div>
        </div>
      </div>

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="mx-4 md:mx-32 border-t border-b border-gray-300 py-8"
        >
          {/* HEADER */}
          <div className="grid grid-cols-3 items-center mb-6">
            {/* Cột trái (giữ chỗ) */}
            <div />

            {/* TITLE */}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-700 text-center">
              TEST
            </h3>

            {/* LINK */}
            <div className="text-right">
              <a
                href="#"
                className="text-base md:text-md font-light text-zinc-500 underline hover:text-blue-400"
              >
                Xem thêm &gt;
              </a>
            </div>
          </div>

          {/* CAROUSEL */}
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent>
              {products.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 md:basis-1/4"
                >
                  <div className="p-2">
                    <Link href="#">
                      <ProductCard {...item} />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </div>
      ))}
    </>
  );
}
