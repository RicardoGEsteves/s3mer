"use client";

import { Volume1, Volume2, VolumeX } from "lucide-react";

import Hint from "@/components/hint";
import { Slider } from "@/components/ui/slider";
import { Button } from "../ui/button";

interface VolumeControlProps {
  onToggle: () => void;
  onChange: (value: number) => void;
  value: number;
}

const VolumeControl = ({ onToggle, onChange, value }: VolumeControlProps) => {
  const isMuted = value === 0;
  const isAboveHalf = value > 50;

  let Icon = Volume1;

  if (isMuted) {
    Icon = VolumeX;
  } else if (isAboveHalf) {
    Icon = Volume2;
  }

  const label = isMuted ? "Unmute" : "Mute";

  const handleChange = (value: number[]) => {
    onChange(value[0]);
  };

  return (
    <div className="flex items-center gap-2">
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
          <Icon className="h-6 w-6" />
        </Button>
      </Hint>
      <Slider
        className="w-[8rem] cursor-pointer"
        onValueChange={handleChange}
        value={[value]}
        max={100}
        step={1}
      />
    </div>
  );
};

export default VolumeControl;
