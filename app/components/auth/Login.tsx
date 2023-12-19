"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) toast.error(result.error);
    else router.replace("/");
  };

  return (
    <div className="w-full p-10 flex justify-center">
      <Card className="rounded w-[50%] py-4 px-10">
        <CardHeader>
          <h2 className="font-semibold text-xl">Login</h2>
        </CardHeader>
        <CardBody className="flex flex-col gap-8">
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
            disabled={loading}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
