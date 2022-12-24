import React, { useState } from "react";
import TableData from "./TableData";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import columns from "./table.json";
import axios from "axios";
const Form = () => {
///useHooks passing in object and set Object
  const [data, setData] = useState({name:"",age:"",desc:""});
  const [storeData, setStoreData] = useState([]);

///
// const url=""
// function submit(e){
//  e.preventDefault();
//   axios.post(url,{
// name:data.name,
// age :data.age,
// desc :data.desc,
//   })
// }






  //useHooks using generic form using json get Data
  const [formJson, setFormJson] = useState(columns.coloumed);

  //useHooks using isVisible new Field in Form
  const [isFieldVisible, setisFieldVisible] = useState(false);
  const [fieldAdd, setfieldAdd] = useState([{ name: "" }]);
  const [isBtnVisible, setBtnVisible] = useState(false);
  const [editbtn, setEditBtn] = useState();
  ///Functuion
  //handleChange for Start Field
  const handleChange = (e) => {
    setData((dataAdd) => ({
      ...dataAdd,
      [e.target.name]: e.target.value,
    }));
  };

  const resetHandle = () => {
    setData({ name: "", age: "", desc: "" });
  };
  ///HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
   
    setStoreData((storeData) => [...storeData, data]);
    // }
    //setData({ name: "", age: "", desc: "" });
  };

  //for Generic Field  to Show
  const AddField = () => {
    setisFieldVisible(true);
  };

  ///For GenericField handleChange
  const valueChange = (e) => {
    setfieldAdd(() => ({
      name: e.target.value,
    }));
  };

  ///For Generic Field Store Data
  const submitField = (e) => {
    e.preventDefault();
    formJson.push(fieldAdd);
    setisFieldVisible(false);
  };

  // for gerenric Component delete Functionality
  const handleDelete = (index) => {
    const numb = [...storeData];
    numb.splice(index, 1);
    setStoreData(numb);
  };

  ///for gerenic Componet Edit Functionality
  const handleUpdate = () => {
    // setData(storeData[index]);
    storeData.splice(editbtn, 1, data);
    setStoreData(storeData);
    setBtnVisible(false);
    setData({});
  };
  const handleEditButton = (index) => {
    setData(storeData[index]);
    setBtnVisible(true);
    setEditBtn(index);
  };

  ///Return Data jsx
  return (
    <div style={{ margin: "10px", marginBottom: "10px", textAlign: "center" }}>
      <div>
        <h1>FormData</h1>
      </div>

      {/*Generic Form  */}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {formJson.map((txt, index) => {
          return (
            <React.Fragment key={index}>
              <TextField
                name={txt.name}
                type="text"
                id={txt.id}
                label={txt.name}
                onChange={handleChange}
                value={data[txt.name] || ""}
              />
            </React.Fragment>
          );
        })}
        {isBtnVisible ? (
          <Button
            variant="contained"
            size="large"
            color="info"
            onClick={handleUpdate}
            style={{ maxWidth: "100px", marginTop: "20px" }}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            color="success"
            onClick={handleSubmit}
            style={{ maxWidth: "100px", marginTop: "20px" }}
          >
            submit
          </Button>
        )}
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={AddField}
          style={{ maxWidth: "100px", marginTop: "20px" }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          size="large"
          color="warning"
          onClick={resetHandle}
          style={{ maxWidth: "100px", marginTop: "20px" }}
        >
          Reset
        </Button>
      </Box>

      {/* Gerenic Field/ */}
      <div style={{ marginTop: "10px" }}>
        <div>
          {isFieldVisible && (
            <div>
              <TextField name="Salary" type="text" onChange={valueChange} />
              <Button
                variant="contained"
                onClick={submitField}
                size="large"
                style={{
                  maxWidth: "100px",
                  marginLeft: "20px",
                  marginTop: "5px",
                }}
              >
                Add
              </Button>
            </div>
          )}
        </div>

        {/* Show table using table component passing props */}
        <div style={{ marginTop: "20px" }}>
          <TableData
            Data={storeData}
            onDelete={handleDelete}
            onEdit={handleEditButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
