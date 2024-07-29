import { useEffect } from "react";

async function fetchData() {
  try {
    const url = "https://restcountries.com/v3.1/all";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching Data", error);
    return null;
  }
}

const APIRequest = ({ setData, setLoading }) => {
    useEffect(() => {
      //function to get the data from fetchData function
      async function getData() {
        const fetchedData = await fetchData();
        //set the returned data to the useState
        setData(fetchedData);
        setLoading(false);
      }
      //invoke getData function on the first application render
      getData();
    }, [setData, setLoading]);
  
    return null;
  };

export default APIRequest;
