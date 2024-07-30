import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = ({ setSearch }) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className="flex items-center shadow p-3 text-xs w-1/2 background-switcher"
      onClick={handleClick}>
      <FontAwesomeIcon icon={faSearch} className="pe-2" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
        className="background-switcher placeholder: w-full outline-none"
      />
    </div>
  );
};

export default Searchbar;
