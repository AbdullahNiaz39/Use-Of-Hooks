import { Button } from "@mui/material";
import React from "react";
import columns from "./table.json";

const TableData = ({ Data, onDelete }) => {
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
              {columns.coloumed.map((column, index) => {
                return (
                  <>
                    <td key={index}>{data[column.name]}</td>
                  </>
                );
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
