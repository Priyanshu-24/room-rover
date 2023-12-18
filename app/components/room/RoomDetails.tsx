"use client";

import { IRoom } from "@/backend/models/room";
import RoomFeatures from "./RoomFeatures";
import RoomImageSlider from "./RoomImageSlider";
import StarRatings from "react-star-ratings";

interface Props {
  data: {
    room: IRoom;
  };
}

const RoomDetails = ({ data }: Props) => {
  const { room } = data;
  console.log(room);

  return (
    <div className="px-20 py-10">
      <h1 className="font-semibold text-2xl">{room?.name}</h1>
      <p className="text-sm my-2">{room?.address}</p>
      <div className="flex items-center my-4">
        <StarRatings
          rating={room?.ratings}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
          name="rating"
        />
        <div className="ml-3 text-xs text-gray-400">
          ({room?.numOfReviews} Reviews)
        </div>
      </div>

      <RoomImageSlider images={room?.images} />

      <h2 className="font-semibold text-xl mt-10 mb-1">Description</h2>
      <p className="text-sm">{room?.description}</p>

      <RoomFeatures room={room} />
    </div>
  );
};

export default RoomDetails;
