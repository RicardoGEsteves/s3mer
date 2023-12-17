"use client";

import { toast } from "sonner";
import { useTransition } from "react";

// import { onBlock, onUnblock } from "@/actions/block";
import { onFollow, onUnfollow } from "@/actions/follow";
import { Button } from "@/components/ui/button";

interface ActionsProps {
  isFollowing: boolean;
  userId: string;
}

const Actions = ({ isFollowing, userId }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(userId)
        .then((data) =>
          toast.success(`You are now following ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const handleUnfollow = () => {
    startTransition(() => {
      onUnfollow(userId)
        .then((data) =>
          toast.success(`You have unfollowed ${data.following.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  const onClick = () => {
    if (isFollowing) {
      handleUnfollow();
    } else {
      handleFollow();
    }
  };

  // const handleUnblock = () => {
  //   startTransition(() => {
  //     onUnblock(userId)
  //       .then((data) =>
  //         toast.success(`Unblocked the user ${data.blocked.username}`)
  //       )
  //       .catch(() => toast.error("Something went wrong"));
  //   });
  // };

  // const handleBlock = () => {
  //   startTransition(() => {
  //     onBlock(userId)
  //       .then((data) =>
  //         toast.success(`Blocked the user ${data?.blocked.username}`)
  //       )
  //       .catch(() => toast.error("Something went wrong"));
  //   });
  // };

  // const onBlockUnblock = () => {
  //   if (isBlocked) {
  //     handleUnblock();
  //   } else {
  //     handleBlock();
  //   }
  // };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={onClick}
        variant="primary"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      {/* <Button
        onClick={onBlockUnblock}
        disabled={isPending}
      >
        //TODO: Change this to {isBlocked ? "unBlock" : "Block"} 
        Block
      </Button> */}
    </>
  );
};

export default Actions;
