const express = require('express');
const userInputController = require('./chatgptController');

const router = express.Router();

router.post("/user-input/:prompt", userInputController.postUserInput);
router.get("/output/:question", userInputController.getOutput);

module.exports = router;
