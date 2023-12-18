import CustomPagination from "./layout/CustomPagination";
import { IRoom } from "@/backend/models/room";
import Link from "next/link";
import RoomItem from "./room/RoomItem";

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

  return (
    <div className="px-20 py-10">
      <h1 className="font-semibold text-2xl">All Rooms</h1>
      <Link href="" className="text-sm my-10">
        =Back to Search
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
