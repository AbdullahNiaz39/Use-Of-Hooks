import { CoolPerson } from "./person";

export class Teacher extends CoolPerson{
  constructor(name,degree){
  super(name);
  this.degree=degree;
  }
  subject(){
  console.log("Mathmatics");
  }
  }