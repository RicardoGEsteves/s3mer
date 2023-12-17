"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <div className="rounded-full lg:mr-0 lg:shrink">
        <Image
          src="/s3mer.svg"
          alt="S3mer logo"
          height={200}
          width={200}
        />
      </div>

      <p>Something went wrong</p>
      <Button
        variant="secondary"
        asChild
      >
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
