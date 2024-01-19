const express = require("express");

const router = express.Router();
const {
  getData,
  createTask,
  updateTask,
} = require("../Controllers/Todo.controller");

router.route("/getData").get(getData);
router.route("/createTask").post(createTask);
router.route("/updateTask").patch(updateTask);

module.exports = router;
