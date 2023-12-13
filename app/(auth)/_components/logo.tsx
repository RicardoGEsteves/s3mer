import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image
        src="/s3mer.svg"
        alt="S3mer logo"
        width={200}
        height={200}
      />
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className={"text-3xl font-semibold"}>S3MER</p>
        <p className="text-sm text-muted-foreground">
          Experience the magic of streaming.
        </p>
      </div>
    </div>
  );
};
