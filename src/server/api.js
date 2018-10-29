//api.js
const express = require("express");
const router = express.Router();
const tictactoe = require("../logic/board");

router.get("/initializeGame", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	tictactoe.initializeGame(request.session.instance);
	response.status(200).send({message: "New Game Started"});
});

router.get("/getBoard", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({board: tictactoe.getBoard(request.session.instance)});
});

router.get("/getTotalMoves", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({totalMoves:tictactoe.getTotalMoves(request.session.instance)});
});

router.get("/getWinner", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({winner: tictactoe.getWinner(request.session.instance)});
});

router.get("/getIsX", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({isX: tictactoe.getIsX(request.session.instance)});
});

router.get("/itsADraw", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({draw: tictactoe.itsADraw(request.session.instance)});
});

router.get("/printBoard", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	response.status(200).send({boardPrinted: tictactoe.printBoard(request.session.instance)});
});

router.get("/move/:square", (request, response) => {
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	let player = tictactoe.getIsX(request.session.instance);
	let message;
	let updatedSquare = "";
	if (tictactoe.move(request.session.instance, request.params.square)) {
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
	if(!request.session.instance) {
		request.session.instance = new tictactoe.tictactoe();
	}
	let state, currentPlayer = "O";

	if (tictactoe.getIsX(request.session.instance)) {
		currentPlayer = "X";
	}

	if (tictactoe.getWinner(request.session.instance)) {
		if (currentPlayer === "X") {
			currentPlayer = "O";
		} else {
			currentPlayer = "X";
		}
		state = currentPlayer + " Won";
	} else if (tictactoe.itsADraw(request.session.instance)) {
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
		board: tictactoe.getBoard(request.session.instance),
		boardPrinted: tictactoe.printBoard(request.session.instance),
		totalMoves: tictactoe.getTotalMoves(request.session.instance),
		currentPlayer: currentPlayer,
		state: state
	};

	response.status(200).send(gameState);
});


module.exports = router;