const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  code: String,
  amount: String,
  account: String,
  balance: String,
  createdAt: Date,
});

exports.Message = mongoose.model("Message", MessageSchema);
