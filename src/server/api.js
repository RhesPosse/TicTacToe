//api.js
const express = require("express");
const router = express.Router();
const tictactoe = require("../logic/board");
const instance = new tictactoe();

router.get("/initializeGame", (request, response) => {
	instance.initializeGame();
	response.status(200).send({message: "New Game Started"});
});

router.get("/getBoard", (request, response) => {
	response.status(200).send({board: instance.getBoard()});
});

router.get("/getTotalMoves", (request, response) => {
	response.status(200).send({totalMoves: instance.getTotalMoves()});
});

router.get("/getWinner", (request, response) => {
	response.status(200).send({winner: instance.getWinner()});
});

router.get("/getIsX", (request, response) => {
	response.status(200).send({isX: instance.getIsX()});
});

router.get("/itsADraw", (request, response) => {
	response.status(200).send({draw: instance.itsADraw()});
});

router.get("/printBoard", (request, response) => {
	response.status(200).send({boardPrinted: instance.printBoard()});
});

router.get("/move/:square", (request, response) => {
	let player = instance.getIsX();
	let message;
	let updatedSquare = "";
	if (instance.move(request.params.square)) {
		if (player) {
			message = "X marked square " + request.params.square;
			updatedSquare = "X";
		} else {
			message = "O marked square " + request.params.square;
			updatedSquare = "O";
		}
	} else {
		message = "Invalid Move";
	}
	response.status(200).send({message: message, updatedSquare: updatedSquare});
});

router.get("/gameState", (request, response) => {
	let state, currentPlayer = "O";

	if (instance.getIsX()) {
		currentPlayer = "X";
	}

	if (instance.getWinner()) {
		if (currentPlayer === "X") {
			currentPlayer = "O";
		} else {
			currentPlayer = "X";
		}
		state = currentPlayer + " Won";
	} else if (instance.itsADraw()) {
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
		board: instance.getBoard(),
		boardPrinted: instance.printBoard(),
		totalMoves: instance.getTotalMoves(),
		currentPlayer: currentPlayer,
		state: state
	};

	response.status(200).send(gameState);
});


module.exports = router;