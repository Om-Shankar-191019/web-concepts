const mongoose = require("mongoose");

async function connectDB(MONGO_URI) {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
