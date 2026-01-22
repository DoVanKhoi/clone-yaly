"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function InputQuantityProduct() {
  const [value, setValue] = useState(1);
  const handleAdd = () => {
    setValue(value + 1);
  };
  const handleRemove = () => {
    if (value > 1) setValue(value - 1);
  };

  return (
    <>
      <div className="grid w-full max-w-10/12 md:max-w-1/2 gap-6">
        <InputGroup>
          <InputGroupAddon
            align="inline-start"
            className={cn(
              "rounded-l-3xl md:rounded-l-2xl transition-colors",
              value === 1 ? "bg-gray-100" : "",
            )}
          >
            <InputGroupButton
              aria-label="Remove"
              title="Remove"
              size="icon-xs"
              data-slot="input-group-control"
              onClick={handleRemove}
              variant={value === 1 ? "ghost" : null}
              className={value === 1 ? "cursor-not-allowed" : "cursor-pointer"}
            >
              <Minus />
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput value={value} readOnly />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Add"
              title="Add"
              size="icon-xs"
              onClick={handleAdd}
              className={"cursor-pointer"}
            >
              <Plus />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </>
  );
}
