const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const TodoRoute = require("./Routes/Todo.routes");

app.use("/api/v1/Todo", TodoRoute);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(process.env.port, () => {
      console.log(`Server is running on port ${process.env.port} ...`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
