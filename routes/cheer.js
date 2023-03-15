const express = require("express");
const router = express.Router();

const {
    question,
    quickReply,
    greatReply,
} = require("../controllers/controller");

router.get("/1", question);
router.get("/2", quickReply);
router.get("/3", greatReply);


module.exports = router;