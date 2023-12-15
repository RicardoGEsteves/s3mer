"use client";

import { toast } from "sonner";
import { useTransition } from "react";

import { onBlock, onUnblock } from "@/actions/block";
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

  // TODO: check this logic if it is correct, or to change it to handle unblock and change onUnblock to onBlock
  const handleBlock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) =>
          // TODO: Change this to `Blocked the user ${data.blocked.username} if it onBlock`}
          toast.success(`Unblocked the user ${data.blocked.username}`)
        )
        .catch(() => toast.error("Something went wrong"));
    });
  };

  return (
    <>
      <Button
        disabled={isPending}
        onClick={onClick}
        variant="primary"
      >
        {isFollowing ? "Unfollow" : "Follow"}
      </Button>
      <Button
        onClick={handleBlock}
        disabled={isPending}
      >
        {/* TODO: Change this to {isBlocked ? "unBlock" : "Block"}  */}
        Block
      </Button>
    </>
  );
};

export default Actions;
