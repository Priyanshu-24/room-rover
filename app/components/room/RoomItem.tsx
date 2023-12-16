"use client";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";

import { IRoom } from "@/backend/models/room";
import Link from "next/link";
import StarRatings from "react-star-ratings";

interface Props {
  room: IRoom;
}

const RoomItem = ({ room }: Props) => {
  return (
    <div className="w-[20%]">
      <Card>
        <CardHeader className="h-44 flex justify-center items-center">
          <Image
            src={
              room?.images?.length > 0
                ? room.images[0].url
                : "/images/default_room_image.jpg"
            }
            alt={room?.name}
            width={250}
          />
        </CardHeader>
        <CardBody>
          <h2 className="my-4 font-semibold h-14 overflow-hidden">
            {room?.name}
          </h2>
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
        </CardBody>
        <CardFooter>
          <Link
            href={`/rooms/${room?._id}`}
            className="bg-[#e61e4d] text-white font-semibold w-full text-sm p-1 flex justify-center rounded-lg"
          >
            View Details
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoomItem;
