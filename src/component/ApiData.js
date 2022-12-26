import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import ApiTable from "./ApiTable";
import TableData from "./TableData";

const ApiData = () => {
  const [apiData, setData] = useState([""]);

  //UseEffect using Fetch Data
  const getdata = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getdata();
  }, []);

  ///Return Data in table
  return (
    <div>
      <h1>ApiData</h1>

      {/* <ApiTable  apiData={apiData}/> */}
      <TableData Data={apiData} />
    </div>
  );
};
export default ApiData;
