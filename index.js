const express = require("express");
const bodyParser = require("body-parser").json;
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

require("./config/db");

const MessageRouter = require("./routes/message");

app.use("/api", MessageRouter);
