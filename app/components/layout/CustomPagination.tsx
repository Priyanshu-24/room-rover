"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "@nextui-org/react";

interface Props {
  resPerPage: number;
  filteredRoomsCount: number;
}

const CustomPagination = ({ resPerPage, filteredRoomsCount }: Props) => {
  const router = useRouter();

  const searchParams = useSearchParams();
  let page = searchParams.get("page") || 1;
  page = Number(page);

  const handlePageChange = (currentPage: number) => {
    if (typeof window !== "undefined") {
      let queryParams = new URLSearchParams(window.location.search);

      if (queryParams.has("page")) {
        queryParams.set("page", currentPage.toString());
      } else {
        queryParams.append("page", currentPage.toString());
      }

      const path = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(path);
    }
  };

  const totalPages = Math.ceil(filteredRoomsCount / resPerPage);

  return (
    <div className="w-full flex justify-center p-4">
      <Pagination
        showControls
        total={totalPages}
        initialPage={page}
        variant="faded"
        size="sm"
        onChange={handlePageChange}
        classNames={{
          cursor: "bg-[#e61e4d]",
        }}
      />
    </div>
  );
};

export default CustomPagination;
