//board.js

const players = ["X", "O"];
const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getPlayers(){
	
	return players;

}

function getBoard(){

	return board;
}

module.exports = {getPlayers, getBoard}; 



