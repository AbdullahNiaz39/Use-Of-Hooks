import React from "react";
import columns from "./table.json";

const TableData = ({ onData }) => {
  //   const { onData } = props;
  return onData.length !== 0 ? (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            {columns.coloumed.map((column) => {
              return (
                <th scope="col" key={column.id}>
                  {column.name}
                </th>
              );
            })}
            {/* <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Designation</th> */}
          </tr>
        </thead>
        <tbody>
{onData.map((data, index) => (
            <tr>
              {columns.coloumed.map((column) => {
                return <td>{data[column.id]}</td>;
              })}
              {/* <th scope="row">{++index}</th>
              <td>{data.name}</td>
              <td>{data.age}</td> 
              <td>{data.desc}</td> */}
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

// {
//   "id": "age",
//   "name": "age"
// },
// {
//   "id": "Designation",
//   "name": "Designation"
// }
