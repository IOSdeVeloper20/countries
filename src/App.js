import { useState } from "react";
import "./App.css";
import APIRequest from "./Components/APIRequest";
import Card from "./Components/Card";
import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import Spinner from "./Components/Spinner";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [loading, setLoading] = useState(true);
  const [dropValue, setDropValue] = useState("");

  const filteredData = apiData.filter((item) => {
    const matchesSearch = item.name.common
      .toLowerCase()
      .includes(searchData.toLowerCase());
    const matchesRegion = dropValue
      ? item.region.toLowerCase() === dropValue.toLowerCase()
      : true;
    return matchesSearch && matchesRegion;
  });
  console.log("filtered", filteredData);

  return (
    <div className="App bg-light-background min-h-screen">
      <APIRequest setData={setApiData} setLoading={setLoading} />
      <Navbar />

      <div className="relative flex p-4 justify-between items-center">
        <Searchbar setSearch={setSearchData} />
        <Dropdown setDropValue={setDropValue} />
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <Card key={item.name.common} data={item} />
            ))
          ) : (
            <p>No Results Found!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
