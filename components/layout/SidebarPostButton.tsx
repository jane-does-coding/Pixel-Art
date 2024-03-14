"use client";
import { useRouter } from "next/router";
import { BsChatTextFill } from "react-icons/bs";

const SidebarPostButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-purple-400 hover:bg-opacity-80 transition cursor-pointer">
        <BsChatTextFill size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 rounded-sm bg-purple-300 hover:bg-opacity-60 cursor-pointer transition">
        <p className="hidden lg:block text-center font-semibold text-md">
          Post
        </p>
      </div>
    </div>
  );
};

export default SidebarPostButton;
