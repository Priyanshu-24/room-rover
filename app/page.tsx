import Error from "./error";
import Home from "./components/Home";

const getRooms = async () => {
  const res = await fetch(`${process.env.API_URL}/api/rooms`, {
    cache: "no-store",
  });
  return res.json();
};

export const HomePage = async () => {
  const data = await getRooms();

  if (data?.message) {
    return <Error error={data} />;
  }

  return <Home data={data} />;
};

export default HomePage;
