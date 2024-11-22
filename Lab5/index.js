import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
import WorkingWithObjects from "./WorkingWithObjects.js";
import WorkingWithArrays from "./WorkingWithArrays.js";

export default function Lab5(app) {
  app.get("/lab5/welcome", (req, res) => {
    res.send("Welcome to Lab 5");
  });
  PathParameters(app);
  QueryParameters(app);
  WorkingWithObjects(app);
  WorkingWithArrays(app);

}
// export default function WorkingWithObjects(app) {
//   app.get("/lab5/assignment", (req, res) => {
//     res.json(assignment);
//   });
//   app.get("/lab5/assignment/title", (req, res) => {
//     res.json(assignment.title);
//   });
// }


