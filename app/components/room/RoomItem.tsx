"use client";

import { Button } from "@nextui-org/react";
import Image from "next/image";
import StarRatings from "react-star-ratings";

const RoomItem = () => {
  return (
    <div>
      <Image
        src="/images/default_room_image.jpg"
        alt="room"
        className="rounded-xl"
        height={20}
        width={230}
      />
      <h2 className="my-4 font-semibold">Room Name</h2>
      <div className="text-sm">
        <span className="font-semibold">5000 </span>/ night
      </div>
      <div className="flex items-center">
        <StarRatings
          rating={4}
          starRatedColor="#e61e4d"
          numberOfStars={5}
          starDimension="15px"
          starSpacing="1px"
          name="rating"
        />
        <div className="ml-3 text-xs text-gray-400">(50 Reviews)</div>
      </div>
      <Button
        fullWidth
        size="sm"
        className="mt-3 bg-[#e61e4d] text-white font-semibold"
      >
        View Details
      </Button>
    </div>
  );
};

export default RoomItem;
