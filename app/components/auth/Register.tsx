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
import { useRegisterMutation } from "@/redux/api/authAPI";
import { useRouter } from "next/navigation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const [register, { isLoading, isSuccess, error }] = useRegisterMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.message);
    }

    if (isSuccess) {
      router.push("/login");
      toast.success("Account registered successfully. You can login now");
    }
  }, [error, isSuccess]);

  const handleSubmit = () => {
    const userData = {
      name,
      email,
      password,
    };

    register(userData);
  };

  return (
    <div className="w-full p-10 flex justify-center">
      <Card className="rounded w-[50%] py-4 px-10">
        <CardHeader>
          <h2 className="font-semibold text-xl">Join Us</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-8">
          <Input
            label="Name"
            type="text"
            labelPlacement="outside"
            placeholder="Enter your name"
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
          <Input
            label="Password"
            type="password"
            labelPlacement="outside"
            placeholder="Enter the password"
            size="sm"
            classNames={{
              label: "font-semibold text-sm",
            }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </CardBody>
        <CardFooter className="mt-5">
          <Button
            href=""
            className="bg-[#e61e4d] w-full flex justify-center items-center font-semibold text-sm text-white rounded-lg"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
