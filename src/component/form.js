import React, { useState } from "react";
import TableData from "./TableData";

const Form = () => {
  const [data, setData] = useState({name:"",age:"",desc:""});
  const [storeData, setStoreData] = useState([]);
  const handleChange = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
    // console.log(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

 const dataSubmit = (e) => {
    if(data.name ===""|| data.age=="" || data.desc==="" )
    {
      e.preventDefault();
    }
    else{
    setStoreData((storeData) => [...storeData, data]);}
    // console.log(...storeData);
  };
  return (
    <div style={{ margin: "10px", marginBottom: "10px", textAlign: "center" }}>
      <div>
        <h1>FormData</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="form-control"
              placeholder="Name"
              value={data.name || ""}
            ></input>
          </div>
          <div class="col">
            <input
              type="number"
              name="age"
              class="form-control"
              onChange={handleChange}
              placeholder="Age"
              value={data.age || ""}
            ></input>
          </div>
          <div class="col">
            <input
              type="text"
              name="desc"
              onChange={handleChange}
              class="form-control"
              placeholder="Designation"
              value={data.desc || ""}
            ></input>
          </div>
          <div class="col">
            <button type="submit" onClick={dataSubmit} class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div class="row"></div>
      </form>
      <div style={{ marginTop: "10px" }}>
        <TableData onData={storeData} />
      </div>
    </div>
  );
};

export default Form;
