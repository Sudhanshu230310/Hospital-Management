const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = mongoose.connect("mongodb+srv://unknown:Y1W3ZOOm5hQQgyl8@cluster0.fbkfx.mongodb.net/Hospital_managment");

module.exports = { dbConnect };