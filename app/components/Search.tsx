"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/?location=${location}`);
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
        </CardBody>
        <CardFooter>
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
