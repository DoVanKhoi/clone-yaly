import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleQuestionMark } from "lucide-react";

export default function SummaryTooltip({ content }: { content: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <CircleQuestionMark className="text-blue-500" size={"1.2rem"} />
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">{content}</TooltipContent>
    </Tooltip>
  );
}
