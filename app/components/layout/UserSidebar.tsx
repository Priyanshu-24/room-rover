"use client";

import { Link, Listbox, ListboxItem } from "@nextui-org/react";

import { useState } from "react";

const UserSidebar = () => {
  const menuItem = [
    {
      name: "Update Profile",
      url: "/me/update",
      icon: "i",
    },
    {
      name: "Upload Avatar",
      url: "/me/upload-avatar",
      icon: "i",
    },
    {
      name: "Update Password",
      url: "/me/update-password",
      icon: "i",
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
                className={`w-full font-semibold text-black ${
                  item.name === activeMenuItem ? "text-[#e61e4d]" : ""
                }`}
                href={item.url}
              >
                ic) {item.name}
              </Link>
            </ListboxItem>
          );
        })}
      </Listbox>
    </div>
  );
};

export default UserSidebar;
