import React, { useState, useEffect } from "react";
import Child from "./child";
const App = () => {
  // useState
  const [count, setCount] = React.useState(0);
  // Every rerender
  useEffect(() => {
    console.log("I run everytime this component rerenders");
  });

  // onMount
  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");
  }, []);

  // Condition based
  useEffect(() => {
    console.log("I run everytime my condition is changed");
  }, [count]);

  //Callback
  const Increment = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  //Usememo
  const result = React.useMemo(() => {
    let i = 0;
    console.time("result");
    while (i < 10000000) {
      i++;
    }
    console.timeEnd("result");
    return 90;
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        Performance optiminezation in React {count} Result is {result}
      </h1>
      <Child onIncrement={Increment} />
    </div>
  );
};

export default App;

// wheneveer the compoent is rendered three things changes
// 1. State changes
//  2. Props changes
//  3. Parent component rerenders changes

///useState
//useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and
//it returns a variable with the current state value (not necessarily
//the initial state) and another function to update this value

//UseEffect
//When you call useEffect , you're telling React to run your “effect” function after
//flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default,
//React runs the effects after every render — including the first render.

//use of memo.React with example
//when ever our count state is changing, our child component is unnessecary rendering in which we don't pass any prop.
//we solve this using React.memo , React.memo is alternative of pure component it check the child component props
//if the props is changing then it will render.it also work like shallow

/// use of React.callback with
// whenever our parent component is rendering we get we new refenernce of count function then our child compoent is rerendering.
// to sove this problem using Callback function,it is cache the function

// use of usememo with example
//usememo is use for to cache the value
//if you  fetch data using api,you request to againist transfrom it take to much time, you call function again and again then
//we use usememo
