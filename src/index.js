import { Teacher } from "./teacher";
import React from "react";
import { createRoot } from "react-dom/client";

import Form from "./component/form";

// const element=<h1>Hello world</h1>
const root = createRoot(document.getElementById("root"));
root.render(<Form />);

// function sayhello(){
//   for (var i = 0; i < 6; i++) {
//     console.log(i)

//   }
//   console.log(i)
// }
// // let,const are block scope
// // var are function scope
// //const keyword cannot resign value
// /// const x=1;
// //x=2;
// sayhello();

// //object insdie a func is method
// const person={
//   name:'Ali',
//   talk (){

//   },
//   walk (){ console.log('this',this)},
// }
//  const walk=person.walk.bind(person);
//  console.log(walk)
// person.talk();
// // person.name='';
// // const targetMember='name';
// // person[targetMember]='John';

// //Arrow Function
// const square= num =>num*num;
// console.log(square(6));

// //e.g.
// const jobs=[
//   {id:1,isactive:true},
//   {id:2,isactive:true},
//   {id:3,isactive:false},
// ]

// const activeJob=jobs.filter(job=>job.isactive);
// console.log(activeJob);

// const business={
// prom(){
//   var self=this
//     setTimeout(function() {
//       console.log('this',self);
//      }, 1000);
//   }
// }
// business.prom();

// //map function is use in React when we render a list of items
// const colors=['red','blue','green'];
// const items=colors.map(color=> `<li>${color}</li>`)

// console.log(items)

// /// desctruction of object
// const adress={
//   street:'',
//   city:'45',
//   country:'',
// }
//  const {city :ct}=adress;
//  console.log(ct);

//  ///spread operator
//  // spread using array
//  const first=[1,2,3];
//  const second=[4,5,6];
//  const combined=[...first,'a',...second,'b'];
//  const clone=[...first];

//  // spread using object
//   const man={name:'Ali'};
//   const post={job:'lawyer'};

//   const join={...man,...post,location:'Canada'};
//   console.log(join);

//   ///classess

// // const coolperson=new CoolPerson('Hamza');
// // console.log(coolperson);

// ///inheritance
// //in class child we access parent class constructor by using 'super' keyword in child constructor

// const teacher=new Teacher("Ali","law");
// teacher.subject();
// console.log(teacher)
