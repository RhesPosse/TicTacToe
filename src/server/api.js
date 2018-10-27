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

router.get("/printBoard", (request, response) => {
	response.status(200).send({boardPrinted: board.printBoard()});
});

router.get("/gameState", (request, response) => {
	let state, currentPlayer = "O";

	if (board.getIsX()) {
		currentPlayer = "X";
	}

	if (board.getWinner()) {
		if (currentPlayer === "X") {
			currentPlayer = "O";
		} else {
			currentPlayer = "X";
		}
		state = currentPlayer + " Won";
	} else if (board.itsADraw()) {
		if (currentPlayer === "X") {
			currentPlayer = "O";
		} else {
			currentPlayer = "X";
		}
		state = "Draw";
	} else {
		state = "Unfinished";
	}

	const gameState = {
		board: board.getBoard(),
		boardPrinted: board.printBoard(),
		totalMoves: board.getTotalMoves(),
		currentPlayer: currentPlayer,
		state: state
	};

	response.status(200).send(gameState);
});


module.exports = router;