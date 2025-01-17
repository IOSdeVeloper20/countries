import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ setDropValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select a region");
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="flex w-full justify-center items-center rounded-sm px-4 py-2 text-xs font-normal shadow background-switcher">
        {/* to show the selected option beside the arrow */}
        {selectedOption}
        <FontAwesomeIcon icon={faAngleDown} className="-mr-1 ml-2 h-2 w-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded shadow background-switcher">
          <div>
            <button
              onClick={() => handleOptionClick("Africa")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Africa
            </button>
            <button
              onClick={() => handleOptionClick("Asia")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Asia
            </button>
            <button
              onClick={() => handleOptionClick("Europe")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Europe
            </button>
            <button
              onClick={() => handleOptionClick("Americas")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Americas
            </button>
            <button
              onClick={() => handleOptionClick("Antarctic")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Antartica
            </button>
            <button
              onClick={() => handleOptionClick("Oceania")}
              className="w-full px-4 py-2 text-xs hover:bg-gray-300 hover:text-gray-950">
              Oceania
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
