//board.js

const players = ["X", "O"];
let board = ["", "", "", "", "", "", "", "", ""];
let isWinner = false;
let isX = true;
let movesMade = 0;

function move(move) {
	if(validateMove(move)) {
		if(isX) {
			board[move-1] = "X";
		}
		else {
			board[move-1] = "O";
		}

		if(isX) {
			isX = false;
		}
		else {
			isX = true;
		}
		movesMade = movesMade + 1;
		return false;
	}
	else {
		return true;
	}
}

function validateMove(move) {
	if(board[move-1] == "") {
		return true;
	}
	return false;
}

function getPlayers(){
	
	return players;

}

function getBoard(){

	return board;
}

function getTotalMoves(){

	return movesMade;
}

module.exports = {getPlayers, getBoard, isWinner, isX, getTotalMoves, move}; 









