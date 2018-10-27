//api.js
const express = require("express");
const router = express.Router();
const board = require("../logic/board")

router.get("/initializeGame", (request, response) => {
	board.initializeGame();
	response.status(200).send({message: "New Game Started"});
});

module.exports = router;