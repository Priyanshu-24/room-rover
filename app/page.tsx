import Error from "./error";
import Home from "./components/Home";

export const metadata = {
  title: "Home Page - Room Rover",
};

const getRooms = async (searchParams: string) => {
  const urlParams = new URLSearchParams(searchParams);
  const queryString = urlParams.toString();

  const res = await fetch(`${process.env.API_URL}/api/rooms?${queryString}`, {
    cache: "no-store",
  });
  return res.json();
};

export const HomePage = async ({ searchParams }: { searchParams: string }) => {
  const data = await getRooms(searchParams);

  if (data?.message) {
    return <Error error={data} />;
  }

  return <Home data={data} />;
};

export default HomePage;
