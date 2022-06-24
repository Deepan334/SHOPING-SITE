require("dotenv").config();
const express = require("Express");
const app = express();
const connect = require("./mongos/Connect.js");
const cors = require("cors");
const bodyParser = require("body-parser");

connect();
// To remove default console errors use cors
app.use(cors());

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));
//To parse json data
app.use(bodyParser.json());

// To import routes
const route = require("./route/router.js");
app.use("/", route);

// app.use("/file", express.static("public"));

//Port declare
const Port = process.env.PORT || 8000;

// db.on("error", (err) => console.log("error:505" + err.message));
// db.once("open", () => {
//   console.log("mongo db connected");
// });

//Assigning Port
app.listen(Port, () => {
  console.log(`server running on port:${Port}`);
});
