"use client";

import { Maximize, Minimize } from "lucide-react";

import Hint from "@/components/hint";
import { Button } from "../ui/button";

interface FullscreenControlProps {
  isFullscreen: boolean;
  onToggle: () => void;
}

const FullscreenControl = ({
  isFullscreen,
  onToggle,
}: FullscreenControlProps) => {
  const Icon = isFullscreen ? Minimize : Maximize;

  const label = isFullscreen ? "Exit fullscreen" : "Enter fullscreen";

  return (
    <div className="flex items-center justify-center gap-4">
      <Hint
        label={label}
        asChild
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="text-primary p-1.5 hover:bg-foreground/10 rounded-lg"
        >
          <Icon className="h-5 w-5" />
        </Button>
      </Hint>
    </div>
  );
};

export default FullscreenControl;
