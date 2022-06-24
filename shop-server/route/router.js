const express = require("express");
const router = express.Router();
const { allProducts, singleProduct } = require("../controler/controler.js");

router.get("/", allProducts);
router.get("/:tit", singleProduct);

module.exports = router;

// app.post("/file", (req, res) => {
//   res.send("user register");
//   const users = new Users({
//     username: req.body.username,
//     password: req.body.password,
//   });

//   users
//     .save()
//     .then((data) => console.log(data))
//     .catch((error) => console.log("error:500" + error.message));
// });

// app.get("/users", (req, res) => {
//   Users.find().then((data) => res.send(data));
// });

// app.get("/users/:name", (req, res) => {
//   Users.findOne({ username: req.params.name }).then((data) => res.send(data));
// });

// app.get("/update/:name/:age", (req, res) => {
//   Users.findOneAndUpdate(
//     { username: req.params.name },
//     { username: req.params.age }
//   ).then((data) => res.send(data));
// });

// app.get("*/:a", (req, res) => {
//   res.send(`Sorry, ${req.params.a}:: url is an invalid URL`);
// });
