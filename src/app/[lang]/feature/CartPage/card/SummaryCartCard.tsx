"use client";

import { Card, CardContent } from "@/components/ui/card";
import SummaryTooltip from "../tooltip/SummaryTooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AmericanExpress, MasterCard, Paypal, Visa } from "@/public/images";

export default function SummaryCartCard() {
  return (
    <Card>
      <CardContent>
        <div>
          <div className="flex justify-between text-2xl">
            <div>Sub Total</div>
            <div>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(0)}
            </div>
          </div>
          <div className="flex justify-between text-2xl">
            <div className="flex">
              <div className="mr-2">Shipping</div>
              <div className="mt-2">
                <SummaryTooltip
                  content={
                    "All orders placed online will display shipping and handling as TBD (to be determined) since freight is determined by the weight and distance and is calculated at the time of shipping."
                  }
                />
              </div>
            </div>
            <div>TBD</div>
          </div>
        </div>
        <Separator className="my-4" />

        <div className="flex justify-between text-2xl font-semibold">
          <div className="uppercase">total</div>
          <div>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(0)}
          </div>
        </div>

        <Button className="uppercase w-full mt-2 bg-[#f58634] hover:bg-orange-300 text-white cursor-pointer">
          Check out
        </Button>
        <div className="text-center text-red-500 font-semibold mt-2">
          Your order contains items with special fabrics. We will contact you
          for a quote separately.
        </div>
        <div className="font-semibold text-2xl mt-8">We Accept:</div>
        <div className="flex gap-2">
          <Image src={Visa} alt="aaa" height="50" width="50" />
          <Image src={MasterCard} alt="aaa" height="50" width="50" />
          <Image src={Paypal} alt="aaa" height="50" width="50" />
          <Image src={AmericanExpress} alt="aaa" height="50" width="50" />
        </div>
      </CardContent>
    </Card>
  );
}
