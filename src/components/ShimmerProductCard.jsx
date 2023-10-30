const ShimmerProductCard = () => {
  return (
    <div className="my-2 flex w-[20rem] flex-col items-center gap-4 rounded-md border p-4 shadow-lg">
      <div className="h-[15rem] w-[20rem] animate-pulse rounded-md bg-gradient-to-r from-gray-200 to-gray-300"></div>

      <div className="flex w-full flex-col gap-2">
        <div className="h-4 animate-pulse rounded bg-gray-200"></div>
        <div className="h-6 animate-pulse rounded bg-gray-200"></div>

        <div className="flex items-center justify-between">
          <div className="flex animate-pulse items-center">
            <div className="h-6 w-6 rounded-full bg-gray-200"></div>
            <div className="h-4 w-12 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="h-8 w-20 animate-pulse rounded bg-gray-200"></div>
        </div>

        <div className="h-14 w-full animate-pulse rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ShimmerProductCard;
