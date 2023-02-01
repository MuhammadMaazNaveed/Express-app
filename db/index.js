const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Connection = async () => {
  try {
    await mongoose.connect("").then(() => console.log("Connection Successful"));
  } catch (error) {
    console.log(error);
  }
};
