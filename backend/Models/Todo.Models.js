const mongoose = require("mongoose");

const TodoDnd = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    enum: ["pending", "inProgress", "completed"],
    default: "pending",
  },
  image: {
    type: String,
  },
});

const TodoScheme = mongoose.model("TodoScheme", TodoDnd);

module.exports = { TodoScheme };
