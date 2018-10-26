//board.js

const players = ["X", "O"];
let board = ["", "", "", "", "", "", "", "", ""];
let isWinner = false;
let isX = true;
let movesMade = 0;


function initializeGame(){
	board = ["", "", "", "", "", "", "", "", ""];
	isWinner = false;
	isX = true;
	movesMade = 0;
}


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

 function checkWin() {

	if(
		((board[0] === board[1] && board[1]=== board[2]) && board[0] !== "") || //rows
		((board[3] === board[4] && board[4]=== board[5]) && board[3] !== "") ||
		((board[6] === board[8] && board[7]=== board[8]) && board[6] !== "") ||
		((board[0] === board[4] && board[4]=== board[8]) && board[0] !== "") ||//diagonal
		((board[2] === board[4] && board[4]=== board[6]) && board[2] !== "") ||
		((board[0] === board[3] && board[3]=== board[6]) && board[0] !== "") ||//columns
		((board[1] === board[4] && board[4]=== board[7]) && board[1] !== "") ||
		((board[2] === board[5] && board[5]=== board[8]) && board[2] !== "") 
	){
		return true;
	}
	return false;
	
};

module.exports = {getPlayers, getBoard, isWinner, isX, getTotalMoves, move, checkWin, initializeGame}; 









