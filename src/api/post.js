import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
});


/*///To run a json server ///
 npx json-server -p 3500 -w src/component/table.json*/
