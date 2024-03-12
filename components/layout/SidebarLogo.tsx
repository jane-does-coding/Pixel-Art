import { useRouter } from "next/router";
import React from "react";
import { FaHandsHelping } from "react-icons/fa";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-start border-b-2 border-purple-300 pb-2 mb-4"
      onClick={() => router.push("/")}
    >
      <div className="rounded-full h-14 w-14 p-3 flex items-center justify-center cursor-pointer transition">
        {/*       <BsTwitter size={28} color="white" />
         */}{" "}
        <FaHandsHelping size={40} color="white" />
      </div>
      <h2
        className="text-white text-xl ml-4 hidden lg:block cursor-pointer"
        onClick={() => router.push("/")}
      >
        FindHelp
      </h2>
    </div>
  );
};

export default SidebarLogo;
