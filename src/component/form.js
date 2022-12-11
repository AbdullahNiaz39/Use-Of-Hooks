import React, { useState } from "react";
import TableData from "./TableData";
import table from "./table.json";
import { Button, TextField } from "@mui/material";
import { Box, margin } from "@mui/system";
import columns from "./table.json";
const Form = () => {
   //useHooks using isVisible
   const [isFieldVisible, setisFieldVisible] = useState(false); 

  //useHooks using generic

  const [formJson, setFormJson] = useState(
    columns.coloumed
    // {
    //   id: 1,
    //   name: "name",
    //   type: "text",
    // },
    // {
    //   id: 2,
    //   name: "age",
    //   type: "number",
    // },
    // {
    //   id: "desc",
    //   name: "desc",
    //   type: "text",
    // },
  );

  ///useHooks passing in object
  const [data, setData] = useState({ name: "", age: "", desc: "" });
  const [storeData, setStoreData] = useState([]);
  const [fieldAdd, setfieldAdd] = useState([{name:""}]);

  //handleChange
  const handleChange = (e) => {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  ///HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (data.name === "" || data.age == "" || data.desc === "") {
    //  return null;
    // } else {
      setStoreData((storeData) => [...storeData, data]);
    // }
  };

  
  //for Generic function  to store Data
  const AddField=()=>{
    setisFieldVisible(true);
  }
///
const valueChange = (e) => {
  setfieldAdd(()=>({
    name:e.target.value
  }));
};

const submitField=(e)=>{
  e.preventDefault();
 formJson.push(fieldAdd);
console.log(formJson);

  setisFieldVisible(false);
}

  ///Return Data
  return (
    <div style={{ margin: "10px", marginBottom: "10px", textAlign: "center" }}>
      <div>
        <h1>FormData</h1>
      </div>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '25ch' },
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      {formJson.map((txt) => {
       return( <TextField name={txt.name} 
        type ="text" 
        label={txt.name} 
        onChange={handleChange}
         value={data[txt.name] || ""}
        />);
      })}
      <Button variant="contained" size="large" type="submit" style={{maxWidth:"100px", marginTop:"20px"}} >
        submit
      </Button>
      <Button variant="contained" onClick={AddField}  style={{maxWidth:"100px", marginTop:"20px"}} >
        Add
      </Button>
      </Box>
      {/* <form onSubmit={handleSubmit}>
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
            <button type="submit" onClick={dataSubmit} class="btn btn-success">
              Submit
            </button>
            <button type="submit" onClick={AddField} class="btn btn-primary">
            Add Filed
            </button>
          </div>
        </div>
        <div class="row"></div>
      </form> */}
      <div style={{ marginTop: "10px" }}>
        <div>
          {isFieldVisible &&
          <>
          <input type="text"  name="descriptions" onChange={valueChange}></input>
          <Button variant="contained" onClick={submitField} size="large"  style={{maxWidth:"100px", marginTop:"20px"}} >
        Add
      </Button>
          </>
          }
        </div>
        <TableData onData={storeData} />
      </div>
    </div>
  );
};

export default Form;
