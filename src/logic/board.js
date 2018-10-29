//board.js

class tictactoe {
	constructor() {
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.isWinner = false;
		this.isX = true;
		this.movesMade = 0;
	};
};

function initializeGame(gameState) {
	gameState.board = ["", "", "", "", "", "", "", "", ""];
	gameState.isWinner = false;
	gameState.isX = true;
	gameState.movesMade = 0;
};

function move(gameState, move) {
	if(validateMove(gameState, move)) {
		if(gameState.isX) {
			gameState.board[move-1] = "X";
			gameState.isX = false;
		}
		else {
			gameState.board[move-1] = "O";
			gameState.isX = true;
		}
		gameState.movesMade += 1;
		checkWin(gameState);
		return true;
	}
	return false;
};

function validateMove(gameState, move) {
	if(gameState.board[move-1] === "" && !gameState.isWinner) {
		return true;
	}
	return false;
};

function getBoard(gameState){
	return gameState.board;
};

function getTotalMoves(gameState){
	return gameState.movesMade;
};

function getWinner(gameState){
	return gameState.isWinner;
};

function getIsX(gameState) {
	return gameState.isX;
};

function itsADraw(gameState){
	if(gameState.movesMade === 9 && !checkWin(gameState)){
		return true;
	}
	return false;
};

function checkWin(gameState) {
	if(
		(gameState.board[0] !== "" && (gameState.board[0] === gameState.board[1] && gameState.board[1] === gameState.board[2])) || //rows
		(gameState.board[3] !== "" && (gameState.board[3] === gameState.board[4] && gameState.board[4] === gameState.board[5])) ||
		(gameState.board[6] !== "" && (gameState.board[6] === gameState.board[7] && gameState.board[7] === gameState.board[8])) ||
		(gameState.board[0] !== "" && (gameState.board[0] === gameState.board[4] && gameState.board[4] === gameState.board[8])) ||//diagonal
		(gameState.board[2] !== "" && (gameState.board[2] === gameState.board[4] && gameState.board[4] === gameState.board[6])) ||
		(gameState.board[0] !== "" && (gameState.board[0] === gameState.board[3] && gameState.board[3] === gameState.board[6])) ||//columns
		(gameState.board[1] !== "" && (gameState.board[1] === gameState.board[4] && gameState.board[4] === gameState.board[7])) ||
		(gameState.board[2] !== "" && (gameState.board[2] === gameState.board[5] && gameState.board[5] === gameState.board[8])) 
	) {
		gameState.isWinner = true;
	}
};

function printBoard(gameState) {
	let boardToPrint = "";

	for(let i = 0; i < 9; i++) {
		if(i === 0 || i === 3 || i === 6) {
			if(gameState.board[i] === "") {
				boardToPrint += "   |";
			}
			else {
				boardToPrint += " " + gameState.board[i] + " |";
			}
		}
		else if(i === 1 || i === 4 || i === 7) {
			if(gameState.board[i] === "") {
				boardToPrint += "   | ";
			}
			else {
				boardToPrint += " " + gameState.board[i] + " | ";
			}
		}
		else {
			if(gameState.board[i] === "") {
				boardToPrint += "  ";
			}
			else {
				boardToPrint += gameState.board[i];
			}

			if(i !== 8) {
				boardToPrint += "\n--- --- ---\n";
			}
		}
	}
	return boardToPrint;
};

function setBoard(gameState, newBoard) {
	if (newBoard.constructor === Array) {
		if (newBoard.length === 9) {
			for(let i = 0; i < 9; ++i) {
				if (newBoard[i] !== "" && newBoard[i] !== "X" && newBoard[i] !== "O") {
					return false;
				}
			}
			gameState.board = newBoard;
			return true;
		}
	}
	return false;
};

module.exports = {
	tictactoe, 
	initializeGame,
	move,
	validateMove,
	getBoard,
	getTotalMoves,
	getWinner,
	getIsX,
	itsADraw,
	checkWin,
	printBoard,
	setBoard
};