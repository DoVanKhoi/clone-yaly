"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartImg } from "@/public/images";
import { Heart, Trash } from "lucide-react";
import Image from "next/image";
import InputQuantityProduct from "./InputQuantityProduct";
import ConfirmDialog from "@/components/dialog/ConfirmDialog";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

export default function CartCard() {
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState<boolean>(false);

  return (
    <>
      <Card className="border-none shadow-none pt-0 pb-3">
        <CardContent>
          <div className="flex">
            <div className="w-1/4 mr-2">
              <Image src={CartImg} alt="image" height={300} width={300} />
            </div>
            <div className="flex flex-col flex-1 w-3/4">
              <div>
                <div className="font-normal uppercase">
                  ĐẦM DÀI 2 DÂY CỔ V VẠT XÉO
                </div>
                <div className="text-red-500 font-bold text-[1rem]">
                  Đại diện bán hàng sẽ liên hệ với bạn để báo giá
                </div>
              </div>

              <div className="flex mt-auto">
                <div>
                  <span>Vải: Elegant English Green</span>
                  <span className="font-bold"> Đặc biệt</span>
                </div>
                <div className="ml-4">Size: XXS</div>
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div>
                    <Button
                      variant="outline"
                      className="border-[#f58634] hover:border-[#f58634] text-[#f58634] hover:text-[#f58634] cursor-pointer"
                    >
                      <Heart />
                      Thêm vào yêu thích
                    </Button>
                  </div>
                  <div className="ml-4 flex">
                    <div className="mt-1">Qty</div>
                    <div className="ml-2">
                      <InputQuantityProduct />
                    </div>
                  </div>
                </div>
                <div title="delete" className="cursor-pointer">
                  <Dialog
                    open={isOpenDeleteDialog}
                    onOpenChange={setIsOpenDeleteDialog}
                  >
                    <DialogTrigger>
                      <Trash
                        size={"1.3rem"}
                        className="mt-1 text-blue-500 hover:text-red-500"
                      />
                    </DialogTrigger>
                    <ConfirmDialog
                      title="Delete product"
                      description="Do you want to delete the currently selected product?"
                      cancelButton="Cancel"
                      confirmButton="Confirm"
                      isOpenDialog={isOpenDeleteDialog}
                      setIsOpenDialog={setIsOpenDeleteDialog}
                    />
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
