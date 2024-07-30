import React from "react";

const Card = ({ data }) => {
  return (
    <div className="rounded overflow-hidden flex flex-col m-4 w-full max-w-[250px] text-xs shadow-lg transition-transform transform background-switcher hover:scale-105">
      <img 
        src={data.flags.png} 
        alt={`${data.name.common} flag`} 
        className="w-full h-32 object-fill" 
      />
      <div className="text-start p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <h2 className="font-extrabold text-sm">{data.name.common}</h2>
        </div>
        <div className="flex flex-col space-y-1">
          <p>
            <strong>Population:</strong> {data.population}
          </p>
          <p>
            <strong>Region:</strong> {data.region}
          </p>
          <p>
            <strong>Capital:</strong> {data.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
