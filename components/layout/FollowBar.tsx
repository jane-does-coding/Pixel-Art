import React from "react";

const FollowBar = () => {
  return (
    <div className="px-4 py-3 hidden lg:block">
      <div className="bg-neutral-800 rounded-sm p-4">
        <h2 className="text-white text-xl font-semibold">Who to help</h2>
        <div className="flex flex-col gap-6 mt-4">{/* TODO USER LIST */}</div>
      </div>
    </div>
  );
};

export default FollowBar;
