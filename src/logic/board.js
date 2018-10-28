//board.js

let board = ["", "", "", "", "", "", "", "", ""];
let isWinner = false;
let isX = true;
let movesMade = 0;


function initializeGame() {
	board = ["", "", "", "", "", "", "", "", ""];
	isWinner = false;
	isX = true;
	movesMade = 0;
};


function move(move) {
	if(validateMove(move)) {
		if(isX) {
			board[move-1] = "X";
			isX = false;
		}
		else {
			board[move-1] = "O";
			isX = true;
		}
		movesMade += 1;
		checkWin();
		return true;
	}
	return false;
}

function validateMove(move) {
	if(board[move-1] === "" && !isWinner) {
		return true;
	}
	return false;
}

function getBoard(){

	return board;
}

function getTotalMoves(){

	return movesMade;
}
function getWinner(){
	return isWinner;
}

function getIsX() {
	return isX;
}

function itsADraw(){
	if(movesMade === 9 && !checkWin()){
		return true;
	}
	return false;
}

 function checkWin() {

	if(
		(board[0] !== "" && (board[0] === board[1] && board[1] === board[2])) || //rows
		(board[3] !== "" && (board[3] === board[4] && board[4] === board[5])) ||
		(board[6] !== "" && (board[6] === board[7] && board[7] === board[8])) ||
		(board[0] !== "" && (board[0] === board[4] && board[4] === board[8])) ||//diagonal
		(board[2] !== "" && (board[2] === board[4] && board[4] === board[6])) ||
		(board[0] !== "" && (board[0] === board[3] && board[3] === board[6])) ||//columns
		(board[1] !== "" && (board[1] === board[4] && board[4] === board[7])) ||
		(board[2] !== "" && (board[2] === board[5] && board[5] === board[8])) 
	) {
		isWinner = true;
	}
};

// print board
function printBoard() {
	let boardToPrint = "";

	for(let i = 0; i < 9; i++) {
		if(i === 0 || i === 3 || i === 6) {
			if(board[i] === "") {
				boardToPrint += "   |";
			}
			else {
				boardToPrint += " " + board[i] + " |";
			}
		}
		else if(i === 1 || i === 4 || i === 7) {
			if(board[i] === "") {
				boardToPrint += "   | ";
			}
			else {
				boardToPrint += " " + board[i] + " | ";
			}
		}
		else {
			if(board[i] === "") {
				boardToPrint += "  ";
			}
			else {
				boardToPrint += board[i];
			}

			if(i !== 8) {
				boardToPrint += "\n--- --- ---\n";
			}
		}
	}
	return boardToPrint;
};

function setBoard(newBoard) {
	if (newBoard.constructor === Array) {
		if (newBoard.length === 9) {
			for(let i = 0; i < 9; ++i) {
				if (newBoard[i] !== "" && newBoard[i] !== "X" && newBoard[i] !== "O") {
					return false;
				}
			}
			board = newBoard;
			return true;
		}
	}
	return false;
}

module.exports = {getIsX, printBoard, getBoard, getTotalMoves, move, checkWin, initializeGame, getWinner, itsADraw, setBoard, validateMove}; 



