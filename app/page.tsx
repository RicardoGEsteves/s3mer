import { UserButton } from "@clerk/nextjs";

export default function RootPage() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">Welcome to Root Page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
