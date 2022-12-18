import { Button } from "@mui/material";
import React from "react";
import columns from "./table.json";

const TableData = ({ Data, onDelete, onEdit }) => {
  //   const { onData } = props;
  return Data.length !== 0 ? (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            {columns.coloumed.map((column) => {
              return (
                <th scope="col" key={column.id}>
                  {column.name}
                </th>
              );
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((data, index) => (
            <tr key={index}>
              {columns.coloumed.map((column, ind) => {
                return <td key={ind}>{data[column.name]}</td>;
              })}
              <td>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => onEdit(index)}
                  style={{
                    maxWidth: "100px",
                    marginLeft: "10px",
                  }}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <h1>There is No Data</h1>
  );
};

export default TableData;
