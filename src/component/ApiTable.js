import React from 'react'

 function ApiTable({apiData}) {
  console.log("api data got by apitable is", apiData);
  return (
    <div> 
      <table className="table table-striped table-dark">
    <thead>
      <tr>
        {Object.keys(apiData[apiData.length-1]).map((col)=>(<th scope="col">{col}</th>))}
    
      </tr>
    </thead>
    <tbody>
      {apiData.map((data,index) => (
        <tr key={index}>
          <th scope="row">{data.postId}</th>
          <td>{data.id}</td>
          <td>{data.name}</td>  
          <td>{data.email}</td> 
          <td>{data.body}</td>                           
        </tr>
      ))}
    </tbody>
  </table>
  </div>
  )
}
export default ApiTable;