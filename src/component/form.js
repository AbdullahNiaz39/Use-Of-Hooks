import React, { useState } from "react";
import TableData from "./TableData";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import columns from "./table.json";
const Form = () => {
  ///useHooks passing in object and set Object
  const [data, setData] = useState({ name: "", age: "", desc: "" });
  const [storeData, setStoreData] = useState([]);

  //useHooks using generic form using json get Data
  const [formJson, setFormJson] = useState(columns.coloumed);

  //useHooks using isVisible new Field in Form
  const [isFieldVisible, setisFieldVisible] = useState(false);
  const [fieldAdd, setfieldAdd] = useState([{ name: "" }]);

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
    // if (data.name === "" || data.age == "" || data.desc === "") {
    //   return null;
    // } else {
    setStoreData((storeData) => [...storeData, data]);
    // }
    // setData({ name: "", age: "", desc: "" });
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
        onSubmit={handleSubmit}
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
        <Button
          variant="contained"
          size="large"
          color="success"
          type="submit"
          style={{ maxWidth: "100px", marginTop: "20px" }}
        >
          submit
        </Button>
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
          <TableData Data={storeData} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Form;
