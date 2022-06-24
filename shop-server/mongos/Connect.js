require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" mongo connection success");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connect;
