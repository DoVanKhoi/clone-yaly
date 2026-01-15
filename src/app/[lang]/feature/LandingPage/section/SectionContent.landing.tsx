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
  return (
    <>
      <div className="mx-4 lg:mx-32 px-4 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* IMAGE */}
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <div className="aspect-4/5 w-full">
              <Image
                src={ImgContent1}
                alt="Content Image"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-1/2 text-zinc-700">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 wrap-break-word">
              Yaly Couture - Thời Trang May Đo Cao Cấp
            </h2>

            <p className="text-base md:text-lg leading-relaxed mb-6 wrap-break-word">
              With 300 skilled artisans, Yaly Couture delivers a luxurious
              tailored experience rooted in Hoi An's heritage. Rigorous in-house
              training ensures excellence from measurements to final products.
              Our craftsmen guarantees expertise in creating stunning,
              individualized garments at affordable price without compromising
              our exceptional quality standard. Let's explore in detail the
              high-end bespoke tailoring process at Yaly Couture, the most
              prestigious bespoke tailor workshop in Hoi An.
            </p>

            <a
              href="#"
              className="inline-block text-base md:text-lg font-medium uppercase text-white bg-orange-400 px-6 py-3 rounded hover:bg-orange-500 transition"
            >
              XEM THÊM
            </a>
          </div>
        </div>
      </div>

      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="mx-4 lg:mx-32 border-t border-b border-gray-300 py-8"
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
                className="text-base md:text-lg font-light text-zinc-500 underline hover:text-blue-400"
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
                  className="basis-full sm:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-2">
                    <Link href="#">
                      <ProductCard {...item} />
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ))}
    </>
  );
}
