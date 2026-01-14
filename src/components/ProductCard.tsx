import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    image: string;
    name: string;
    price: string;
    likes?: number;
}

export default function ProductCard({
    image,
    name,
    price,
    likes = 0,
}: ProductCardProps) {
    return (
        <div className="group rounded-xl overflow-hidden bg-white transition-shadow duration-300 shadow hover:shadow-xl">
            {/* Image */}
            <div className="relative w-full h-105 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    priority={false}
                />

                <button className="absolute bottom-3 right-3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-md transition hover:scale-110 hover:text-orange-500">
                    <ShoppingBag size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                <p className="text-sm font-medium uppercase tracking-wide line-clamp-2">
                    {name}
                </p>

                <div className="mt-2 flex items-center justify-between">
                    <span className="text-lg font-semibold">{price}</span>

                    <button className="flex items-center gap-1 text-gray-400 hover:text-red-500 transition">
                        <Heart size={18} />
                        <span className="text-sm">{likes}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
