//api.js
const express = require("express");
const router = express.Router();
const board = require("../logic/board")

router.get("/initializeGame", (request, response) => {
	board.initializeGame();
	response.status(200).send({message: "New Game Started"});
});

router.get("/getBoard", (request, response) => {
	response.status(200).send({board: board.getBoard()});
});

router.get("/getTotalMoves", (request, response) => {
	response.status(200).send({totalMoves: board.getTotalMoves()});
});

router.get("/getWinner", (request, response) => {
	response.status(200).send({winner: board.getWinner()});
});

router.get("/getIsX", (request, response) => {
	response.status(200).send({isX: board.getIsX()});
});

router.get("/itsADraw", (request, response) => {
	response.status(200).send({draw: board.itsADraw()});
});

module.exports = router;