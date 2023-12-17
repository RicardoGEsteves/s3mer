import { getStreams } from "@/lib/feed-service";
import { Skeleton } from "@/components/ui/skeleton";

import ResultCard, { ResultCardSkeleton } from "./result-card";

const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className="text-mb font-semibold mb-6">
        <span className="uppercase text-muted-foreground text-lg mr-2">
          Unleash the Thrill:
        </span>{" "}
        Discover the hottest{" "}
        <span className="uppercase text-primary text-lg mx-2">Streams</span>{" "}
        await you now!
      </h2>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result) => (
          <ResultCard
            key={result.id}
            data={result}
          />
        ))}
      </div>
    </div>
  );
};

export default Results;

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[600px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
