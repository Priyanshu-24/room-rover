"use client";

import CustomPagination from "./layout/CustomPagination";
import { IRoom } from "@/backend/models/room";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import RoomItem from "./room/RoomItem";
import { useSearchParams } from "next/navigation";

interface Props {
  data: {
    success: boolean;
    resPerPage: number;
    filteredRoomsCount: number;
    rooms: IRoom[];
  };
}

const Home = ({ data }: Props) => {
  const { resPerPage, filteredRoomsCount, rooms } = data;

  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  return (
    <div className="px-20 py-10">
      <h1 className="font-semibold text-2xl">
        {location
          ? `${filteredRoomsCount} rooms found in ${location}`
          : "All Rooms"}
      </h1>
      <Link href="/search" className="text-sm my-10 flex items-center gap-1">
        <IoMdArrowBack />
        Back to Search
      </Link>
      <div className="flex flex-wrap mt-10 justify-between">
        {rooms?.length === 0 ? (
          <div>No Rooms</div>
        ) : (
          rooms.map((room) => <RoomItem key={room?._id} room={room} />)
        )}
      </div>
      <CustomPagination
        resPerPage={resPerPage}
        filteredRoomsCount={filteredRoomsCount}
      />
    </div>
  );
};

export default Home;
