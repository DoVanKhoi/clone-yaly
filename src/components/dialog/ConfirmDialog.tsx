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
            variant="secondary"
            onClick={() => setIsOpenDialog(!isOpenDialog)}
          >
            {cancelButton}
          </Button>
          <Button
            type="button"
            variant="default"
            onClick={() => setIsOpenDialog(!isOpenDialog)}
          >
            {confirmButton}
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
