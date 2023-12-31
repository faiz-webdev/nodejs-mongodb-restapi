const mongoose = require("mongoose");
require('dotenv').config()


exports.dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: "true",
      useUnifiedTopology: "true",
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
