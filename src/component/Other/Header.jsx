import React from "react";

const Header = () => {
  
  return (
    <div className="flex item-end justify-between">
      <h1 className="text-2xl">
        Hello <br /> <span className="text-2xl font-semibold"> Sarthak </span>{" "}
      </h1>
      <button className="bg-red-600 text-lg font-medium text-white px-2 py-2 rounded-lg shadow-lg">
        Log Out
      </button>
    </div>
  );
};

export default Header;
