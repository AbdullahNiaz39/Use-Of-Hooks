import React from "react";

const Child = (props) => {
  return (
    <div>
      {console.log("Render From Child ")}
      <button onClick={props.onIncrement}>Increment Count</button>
      <h4>child Componenet with no prop</h4>
    </div>
  );
};
export default React.memo(Child);
