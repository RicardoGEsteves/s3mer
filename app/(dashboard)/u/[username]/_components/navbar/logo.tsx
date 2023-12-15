import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="rounded-full mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/s3mer.svg"
            alt="S3mer logo"
            height={50}
            width={50}
          />
        </div>

        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">S3MER</p>
          <p className="text-xs text-muted-foreground">Your S3MER Dashboard</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
