const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = mongoose.connect("mongodb+srv://unknown:5jquPs_tmDC7Z2A@cluster0.fbkfx.mongodb.net/hospital_managment");

module.exports = { dbConnect };