"use client";

import CartCard from "./card/CartCard";
import SummaryCartCard from "./card/SummaryCartCard";

export default function CartPage() {
  return (
    <>
      <div className="container mr-auto ml-auto pl-32 pr-32 pt-16 pb-16">
        <div className="font-bold text-3xl mb-2 px-6">Giỏ hàng</div>
        <div className="flex">
          <div className="w-1/2 mr-4">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          <div className="w-1/2">
            <SummaryCartCard />
          </div>
        </div>
      </div>
    </>
  );
}
