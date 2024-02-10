const mongoose = require("mongoose");

const auth = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const AuthSchema = mongoose.model("AuthSchema", auth);

module.exports = { AuthSchema };
