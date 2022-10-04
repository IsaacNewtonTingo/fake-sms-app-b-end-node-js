const express = require("express");
const { Message } = require("../models/message");
const router = express.Router();

router.post("/post-message", async (req, res) => {
  const { code, amount, account } = req.body;

  const newMessage = new Message({
    code: code,
    amount: amount,
    account: account,
    balance: 1230 - amount,
    createdAt: Date.now() + 10800000,
  });

  await newMessage
    .save()
    .then(() => {
      res.json({
        status: "Success",
        message: "Posted successfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        status: "Failed",
        message: "Error occured while saving message",
      });
    });
});

router.get("/get-message", async (req, res) => {
  await Message.find({})
    .limit(1)
    .sort({ createdAt: -1 })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
