const express = require("express");

const router = express.Router();
const { getData } = require("../Controllers/Todo.controller");

router.route("/getData").get(getData);

module.exports = router;
