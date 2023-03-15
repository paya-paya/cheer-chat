const express = require("express");
const router = express.Router();

const {
    question,
} = require("../controllers/controller");

router.get("/", question);

module.exports = router;