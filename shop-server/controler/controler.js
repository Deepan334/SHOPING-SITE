const Product = require("../model/model.js");

exports.allProducts = (req, res) => {
  Product.find().then((data) => res.send(data));
};
exports.singleProduct = (req, res) => {
  // console.log(req.params.tit);
  Product.findOne({ title: req.params.tit }).then((dat) => res.send(dat));
};
