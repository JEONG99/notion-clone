"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "next-themes";

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

const IconPicker = ({ onChange, children, asChild }: IconPickerProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover>
      <PopoverTrigger asChild={asChild}>{children}</PopoverTrigger>
      <PopoverContent className="p-0 w-full border-none shadow-none">
        <Picker
          height={350}
          data={data}
          theme={resolvedTheme}
          onEmojiSelect={(emoji: any) => onChange(emoji.native)}
        />
      </PopoverContent>
    </Popover>
  );
};

export default IconPicker;
