"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    const queryString = [
      location && `location=${encodeURIComponent(location)}`,
      guests && `guestCapacity=${encodeURIComponent(guests)}`,
      category && `category=${encodeURIComponent(category)}`,
    ]
      .filter(Boolean)
      .join("&");

    router.push(`/?${queryString}`);
  };

  return (
    <div className="w-full p-10 flex justify-center">
      <Card className="rounded w-[50%] py-4 px-10">
        <CardHeader>
          <h2 className="font-semibold text-xl">Search Rooms</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-8">
          <Input
            label="Location"
            labelPlacement="outside"
            placeholder="Enter the location"
            size="sm"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <Select
            value={guests}
            size="sm"
            label="Number of Guests"
            labelPlacement="outside"
            placeholder="Select the number of guests"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setGuests(e.target.value)}
          >
            {["1", "2", "3", "4", "5", "6"].map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </Select>
          <Select
            value={category}
            size="sm"
            label="Category"
            labelPlacement="outside"
            placeholder="Select the category of the room"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["King", "Single", "Twins"].map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              );
            })}
          </Select>
        </CardBody>
        <CardFooter className="mt-5">
          <Button
            size="sm"
            href=""
            className="bg-[#e61e4d] w-full flex justify-center items-center font-semibold text-sm text-white rounded-lg"
            onClick={handleSubmit}
          >
            Search
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Search;
