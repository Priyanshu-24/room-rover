"use client";

import { IRoom } from "@/backend/models/room";
import Image from "next/image";
import Link from "next/link";
import StarRatings from "react-star-ratings";

interface Props {
  room: IRoom;
}

const RoomItem = ({ room }: Props) => {
  return (
    <>
      <div>
        <div>
          <Image
            src={
              room?.images?.length > 0
                ? room.images[0].url
                : "/images/default_room_image.jpg"
            }
            alt={room?.name}
            className="rounded-xl"
            height={270}
            width={200}
          />

          <h2 className="my-4 font-semibold h-10">{room?.name}</h2>
          <div className="text-sm">
            <span className="font-semibold">{room?.pricePerNight} </span>/ night
          </div>
          <div className="flex items-center">
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
          <Link
            href={`/rooms/${room?._id}`}
            className="mt-3 bg-[#e61e4d] text-white font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomItem;
