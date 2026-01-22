import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Dispatch, SetStateAction } from "react";

export default function ConfirmDialog({
  title,
  description,
  cancelButton,
  confirmButton,
  isOpenDialog,
  setIsOpenDialog,
}: {
  title: string;
  description: string;
  cancelButton: string;
  confirmButton: string;
  isOpenDialog: boolean;
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <Button
            type="button"
            variant={"outline"}
            onClick={() => setIsOpenDialog(!isOpenDialog)}
            className="border-[#f58634] hover:border-[#f58634] text-[#f58634] hover:text-[#f58634] cursor-pointer"
          >
            {cancelButton}
          </Button>
          <Button
            type="button"
            onClick={() => setIsOpenDialog(!isOpenDialog)}
            className="border-[#f58634] hover:border-[#f58634] bg-[#f58634] hover:bg-[#f58634] text-white hover:text-white cursor-pointer"
          >
            {confirmButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
