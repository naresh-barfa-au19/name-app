const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nameDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("Connection Successful with mongoDB!");
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    trim: true,
    lowercase: true,
  },
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = { UserModel, db };
