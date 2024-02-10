const AuthSchema = require("../Models/Auth.models");

const registerUser = (req, res) => {
  const { name, email, password } = req.body();
  try {
    AuthSchema.findOne({ email: email })
      .then(() => {
        res.status(400).json({ error: "Email already exist" });
      })
      .catch(() => {
        const user = AuthSchema.create({
          name: name,
          email: email,
          password: password,
        });
        const newUser = [...user, (password = "")];
        res.status(200).json({ newUser });
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Take some rest we are figuring out the error" });
  }
};
