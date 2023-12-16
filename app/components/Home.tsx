import Link from "next/link";
import RoomItem from "./room/RoomItem";

const Home = ({ data }) => {
  return (
    <div className="px-20 py-10">
      <h1 className="font-semibold text-2xl">All Rooms</h1>
      <Link href="" className="text-sm my-10">
        =Back to Search
      </Link>
      <section className="flex mt-10 gap-x-16 justify-between gap-y-32 flex-wrap">
        <RoomItem />
      </section>
    </div>
  );
};

export default Home;
