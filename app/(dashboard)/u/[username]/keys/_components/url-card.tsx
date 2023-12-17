import { Input } from "@/components/ui/input";

import CopyButton from "./copy-button";

interface UrlCardProps {
  value: string | null;
}

const UrlCard = ({ value }: UrlCardProps) => {
  return (
    <div className="rounded-xl border p-6">
      <div className="flex items-center gap-x-10">
        <p className="font-semibold shrink-0">Server URL</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              disabled
              placeholder="Server URL"
              className="bg-secondary/40 ring-offset-background focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <CopyButton value={value || ""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlCard;
