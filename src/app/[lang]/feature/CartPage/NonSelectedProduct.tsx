"use client";

import { Button } from "@/components/ui/button";
import EmptyProduct from "./EmptyProduct";
import { useRouter } from "next/navigation";

export default function NonSelectedProduct() {
  const router = useRouter();

  return (
    <>
      <div className="container text-center">
        <EmptyProduct className="h-[25vh] mt-2 flex justify-center" />
        <div className="text-xl">
          Hãy thoải mái lựa chọn sản phẩm của bạn nhé.
        </div>
        <div className="mt-2 mb-4">
          <Button
            className="bg-[#f58634] hover:bg-orange-300 text-white cursor-pointer"
            onClick={() => router.push("/")}
          >
            Mua ngay
          </Button>
        </div>
      </div>
    </>
  );
}
