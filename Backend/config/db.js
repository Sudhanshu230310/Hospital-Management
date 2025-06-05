const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = mongoose.connect("");

module.exports = { dbConnect };