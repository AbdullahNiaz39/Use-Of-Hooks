import React from "react";

const TableData = ({ onData }) => {
  //   const { onData } = props;
  return onData.length==0?(
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {onData.map((data, index) => (
            <tr>
              <th scope="row">{++index}</th>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ):"There is No Data";
};

export default TableData;
