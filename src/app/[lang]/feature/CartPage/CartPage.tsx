"use client";

import CartCard from "./card/CartCard";
import SummaryCartCard from "./card/SummaryCartCard";

export default function CartPage() {
  return (
    <>
      <div className="container mr-auto ml-auto md:pl-32 md:pr-32 md:pt-16 md:pb-16">
        <div className="flex justify-center md:block font-bold text-3xl py-4 md:py-0 mb-2 px-6">Giỏ hàng</div>
        <div className="md:flex">
          <div className="md:w-1/2 mr-4">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="md:w-1/2">
            <div className="md:sticky md:top-24">
              <SummaryCartCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
