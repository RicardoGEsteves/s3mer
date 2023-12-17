"use client";

import { format } from "date-fns";
import { ReceivedChatMessage } from "@livekit/components-react";

import { stringToColor } from "@/lib/utils";

interface ChatMessageProps {
  data: ReceivedChatMessage;
}

const ChatMessage = ({ data }: ChatMessageProps) => {
  const color = stringToColor(data.from?.name || "");

  return (
    <div className="flex gap-2 p-2 rounded-md hover:bg-secondary">
      <p className="text-sm text-foreground/40">
        {format(data.timestamp, "HH:MM")}
      </p>
      <div className="flex flex-wrap items-baseline gap-1 grow">
        <p className="text-sm font-semibold whitespace-nowrap">
          <span
            className="truncate"
            style={{ color: color }}
          >
            {data.from?.name}
          </span>
          :
        </p>
        <p className="text-sm break-all">{data.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
