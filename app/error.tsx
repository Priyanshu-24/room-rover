"use client";

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset?: () => void;
}) {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-2xl">{error?.message}</h2>
          <p className="">
            <span className="text-red-500">Opps!</span> Something went wrong!
          </p>
          <p className="text-sm">Sorry for inconvience</p>
          <Button size="sm" className="bg-[#e61e4d] text-white text-sm">
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
}
