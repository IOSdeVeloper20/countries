import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="flex justify-between shadow p-4 bg-white">
      <h1 className="font-extrabold">Where in the World?</h1>
      <button className="font-light">
        <FontAwesomeIcon icon={faMoon} className="pe-2"/>
        Dark Mode
      </button>
    </div>
  );
};

export default Navbar;
