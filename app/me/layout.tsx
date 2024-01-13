import { ReactNode } from "react";
import UserSidebar from "../components/layout/UserSidebar";

interface Props {
  children: ReactNode;
}

const UserLayout = ({ children }: Props) => {
  return (
    <>
      <h1 className="bg-slate-200 p-5 flex justify-center text-2xl font-semibold">
        User Settings
      </h1>
      <div className="flex w-full justify-between p-20">
        <div className="w-[30%]">
          <UserSidebar />
        </div>
        <div className="w-[40%]">{children}</div>
      </div>
    </>
  );
};

export default UserLayout;
