const mongoose = require("mongoose");
const { TodoScheme } = require("../Models/Todo.Models");
const getData = async (req, res) => {
  try {
    const resp = await TodoScheme.find();
    res.status(200).json({ data: resp });
  } catch (error) {
    console.log("catch");
    res.status(500).json({ message: "Something Wrong has Happened up" });
  }
};

module.exports = { getData };
