import React from "react";
import ThemeButton from "../ThemeButton";


const Navbar = () => {
  return (
    <div className="flex justify-between shadow p-4 background-switcher">
      <h1 className="font-extrabold">Where in the World?</h1>
      <ThemeButton />
    </div>
  );
};

export default Navbar;
