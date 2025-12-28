"use client";

import { ImgContent1 } from "@/public/images";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

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
            <div className="h-160 flex items-center mx-32 py-6">
                <div className="flex h-full justify-center my-4 grow-0 shrink-0 basis-auto w-1/2 px-6 relative overflow-hidden">
                    <Image className="h-full w-auto object-contain" src={ImgContent1} alt="Content Image" />
                </div>

                <div className="flex flex-col h-full items-start grow-0 shrink-0 basis-auto w-1/2 px-6 text-zinc-700">
                    <h2 className="text-4xl font-bold mb-4">
                        Yaly Couture - Thời Trang May Đo Cao Cấp
                    </h2>
                    <p className="text-lg mb-6">
                        With 300 skilled artisans, Yaly Couture delivers a luxurious tailored experience rooted in Hoi An's heritage.
                        Rigorous in-house training ensures excellence from measurements to final products. Our craftsmen guarantees expertise in creating stunning, individualized garments at affordable price without compromising our exceptional quality standard.
                        Let's explore in detail the high-end bespoke tailoring process at Yaly Couture , the most prestigious bespoke tailor workshop in Hoi An.
                    </p>
                    <a className="text-xl font-medium uppercase text-white bg-orange-400 px-6 py-2 rounded"
                        href="#"
                    >
                        XEM THÊM
                    </a>
                </div>
            </div>
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="mx-32 border-t border-b border-gray-300 pb-6">
                    <div className=" relative my-4 text-center">
                        <h3 className="text-5xl font-medium text-zinc-700">
                            TEST
                        </h3>
                        <a href="#" className="text-2xl font-light text-zinc-500 absolute right-0 top-1/2 -translate-y-1/2 underline hover:text-blue-400">
                            Xem thêm {">"}
                        </a>
                    </div>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {products.map((item, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                    <div className="p-2">
                                        <Link href={`#`}>
                                            <ProductCard
                                                image={item.image}
                                                name={item.name}
                                                price={item.price}
                                                likes={item.likes}
                                            />
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