const express = require("express");

const router = express.Router();
const {
  getData,
  createTask,
  updateTask,
  deleteTask,
} = require("../Controllers/Todo.controller");

router.route("/getData").get(getData);
router.route("/createTask").post(createTask);
router.route("/updateTask").patch(updateTask);
router.route("/deleteTask").delete(deleteTask);

module.exports = router;
