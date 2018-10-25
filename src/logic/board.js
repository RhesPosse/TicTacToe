//board.js

const players = ["X", "O"];
const board = ["", "", "", "", "", "", "", "", ""];
let isWinner = false;
let isX = true;
let movesMade = 0;


function getPlayers(){
	
	return players;

}

function getBoard(){

	return board;
}

function getTotalMoves(){

	return movesMade;
}

module.exports = {getPlayers, getBoard, isWinner, isX, getTotalMoves}; 









