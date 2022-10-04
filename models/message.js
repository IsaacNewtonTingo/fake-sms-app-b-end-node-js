const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  code: String,
  amount: Number,
  account: Number,
  balance: Number,
  createdAt: Date,
});

exports.Message = mongoose.model("Message", MessageSchema);
