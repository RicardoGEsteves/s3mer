import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
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
      <h1 className="text-4xl">404</h1>
      <p>We couldn&apos;t find the user you were looking for.</p>
      <Button
        variant="secondary"
        asChild
      >
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
