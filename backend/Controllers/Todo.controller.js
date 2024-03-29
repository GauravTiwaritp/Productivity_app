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

const createTask = async (req, res) => {
  try {
    const { title, status } = req.body;
    if (title.length > 0) {
      await TodoScheme.create({
        title: title,
        status: status,
      });
    }
    res.status(200).json({ message: "Task is Created succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something Wrong has Happened up" });
  }
};

const updateTask = async (req, res) => {
  try {
    const { _id, title, status } = req.body;
    if (title.length > 0) {
      await TodoScheme.findByIdAndUpdate(_id, {
        title: title,
        status: status,
      });
    }
    res.status(200).json({ message: "Task updated succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    console.log(req.body);
    const { _id } = req.body;
    const resp = await TodoScheme.findByIdAndDelete(_id);
    res.status(200).json({ message: resp });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

module.exports = { getData, createTask, updateTask, deleteTask };
