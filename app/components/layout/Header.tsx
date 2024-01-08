"use client";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import { setIsAuthenticated, setUser } from "@/redux/features/userSlice";
import { signOut, useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const { data } = useSession();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data?.user));
      dispatch(setIsAuthenticated(true));
    }
  }, [data]);

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-between items-center py-5 px-20 shadow-lg">
      <Link href="/" className="font-semibold text-lg flex items-center gap-1">
        <Image
          src="/images/logo.png"
          width={30}
          height={50}
          alt="room-rover-logo"
          quality={100}
        />
        Room Rover
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-2">
            <Avatar src={user?.image ? user.image : ""} size="sm" />
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  size="sm"
                  className="font-semibold"
                  radius="sm"
                >
                  {user?.name}
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem
                  key="logout"
                  onClick={logoutHandler}
                  className="text-[#e61e4d]"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        ) : (
          <>
            {data === undefined ? (
              <div className="flex items-center gap-3">
                <div>
                  <Skeleton className="flex rounded-full w-10 h-10" />
                </div>
                <div className="flex flex-col gap-3">
                  <Skeleton className="rounded w-24 h-2" />
                  <Skeleton className="rounded w-32 h-2" />
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-[#e61e4d] font-semibold text-sm text-white rounded-md py-2 px-4"
              >
                Login
              </Link>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
