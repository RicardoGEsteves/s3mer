import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
// import { isBlockedByUser } from "@/lib/block-service";
import StreamPlayer from "@/components/stream-player";
import Actions from "./_components/actions";

interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPageProps) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  //   const isBlocked = await isBlockedByUser(user.id);

  //   if (isBlocked) {
  //     notFound();
  //   }

  return (
    // <StreamPlayer
    //   user={user}
    //   stream={user.stream}
    //   isFollowing={isFollowing}
    // />

    // TODO: Remove this
    <div className="flex flex-col gap-y4">
      <p>Username: {user.username}</p>
      <p>user ID: {user.id} </p>
      <p>is following: {`${isFollowing}`} </p>
      <Actions
        isFollowing={isFollowing}
        userId={user.id}
      />
    </div>
  );
};

export default UserPage;
