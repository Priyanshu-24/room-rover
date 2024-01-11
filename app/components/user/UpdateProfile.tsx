"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useUpdateProfileMutation } from "@/redux/api/userAPI";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const { user } = useAppSelector((state) => state.auth);

  const [updateProfile, { isLoading, isSuccess, error }] =
    useUpdateProfileMutation();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);

    if (error && "data" in error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      router.refresh();
    }
  }, [user, isSuccess, error]);

  const handleSubmit = () => {
    const userData = { name, email };
    updateProfile(userData);
  };

  return (
    <div className="w-full p-10 flex justify-center">
      <Card className="rounded w-[50%] py-4 px-10">
        <CardHeader>
          <h2 className="font-semibold text-xl">Update Profile</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-8">
          <Input
            label="Name"
            type="text"
            labelPlacement="outside"
            placeholder="Enter the name"
            size="sm"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            label="Email"
            type="email"
            labelPlacement="outside"
            placeholder="Enter the email"
            size="sm"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </CardBody>
        <CardFooter className="mt-5">
          <Button
            href=""
            className="bg-[#e61e4d] w-full flex justify-center items-center font-semibold text-sm text-white rounded-lg"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Update
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UpdateProfile;
