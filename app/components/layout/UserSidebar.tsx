"use client";

import { Link, Listbox, ListboxItem } from "@nextui-org/react";

import { AiOutlineProfile } from "react-icons/ai";
import { GiConcentricCrescents } from "react-icons/gi";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";

const UserSidebar = () => {
  const menuItem = [
    {
      name: "Update Profile",
      url: "/me/update",
      icon: <AiOutlineProfile />,
    },
    {
      name: "Upload Avatar",
      url: "/me/upload-avatar",
      icon: <GiConcentricCrescents />,
    },
    {
      name: "Update Password",
      url: "/me/update-password",
      icon: <RiLockPasswordLine />,
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = useState(menuItem[0].name);

  return (
    <div>
      <Listbox
        items={menuItem}
        className="border-2 border-gray-200 p-2 rounded-md shadow-lg"
      >
        {menuItem.map((item) => {
          return (
            <ListboxItem
              key={item.name}
              className={item.name === activeMenuItem ? "bg-gray-200" : ""}
            >
              <Link
                className={`w-full font-semibold text-black flex items-center gap-1 ${
                  item.name === activeMenuItem ? "text-[#e61e4d]" : ""
                }`}
                href={item.url}
              >
                {item.icon} {item.name}
              </Link>
            </ListboxItem>
          );
        })}
      </Listbox>
    </div>
  );
};

export default UserSidebar;
