var mongoose = require("mongoose");
const mainschema = mongoose.Schema({
  studentName: String,
  studentAge: Number,
  studentDept: String,
});
const mainmodel = mongoose.model("main", mainschema);

module.exports = mainmodel;
