'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { ImgContent1 } from "@/public/images";

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

export default function CatalogPage() {
  return (
    <>
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
