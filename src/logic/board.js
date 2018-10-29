//board.js

class tictactoe {
	constructor() {
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.isWinner = false;
		this.isX = true;
		this.movesMade = 0;
	}

	initializeGame() {
		this.board = ["", "", "", "", "", "", "", "", ""];
		this.isWinner = false;
		this.isX = true;
		this.movesMade = 0;
	};

	move(move) {
		if(this.validateMove(move)) {
			if(this.isX) {
				this.board[move-1] = "X";
				this.isX = false;
			}
			else {
				this.board[move-1] = "O";
				this.isX = true;
			}
			this.movesMade += 1;
			this.checkWin();
			return true;
		}
		return false;
	};

	validateMove(move) {
		if(this.board[move-1] === "" && !this.isWinner) {
			return true;
		}
		return false;
	};

	getBoard(){
		return this.board;
	};

	getTotalMoves(){
		return this.movesMade;
	};

	getWinner(){
		return this.isWinner;
	};

	getIsX() {
		return this.isX;
	};

	itsADraw(){
		if(this.movesMade === 9 && !this.checkWin()){
			return true;
		}
		return false;
	};

	checkWin() {
		if(
			(this.board[0] !== "" && (this.board[0] === this.board[1] && this.board[1] === this.board[2])) || //rows
			(this.board[3] !== "" && (this.board[3] === this.board[4] && this.board[4] === this.board[5])) ||
			(this.board[6] !== "" && (this.board[6] === this.board[7] && this.board[7] === this.board[8])) ||
			(this.board[0] !== "" && (this.board[0] === this.board[4] && this.board[4] === this.board[8])) ||//diagonal
			(this.board[2] !== "" && (this.board[2] === this.board[4] && this.board[4] === this.board[6])) ||
			(this.board[0] !== "" && (this.board[0] === this.board[3] && this.board[3] === this.board[6])) ||//columns
			(this.board[1] !== "" && (this.board[1] === this.board[4] && this.board[4] === this.board[7])) ||
			(this.board[2] !== "" && (this.board[2] === this.board[5] && this.board[5] === this.board[8])) 
		) {
			this.isWinner = true;
		}
	};

	printBoard() {
		let boardToPrint = "";

		for(let i = 0; i < 9; i++) {
			if(i === 0 || i === 3 || i === 6) {
				if(this.board[i] === "") {
					boardToPrint += "   |";
				}
				else {
					boardToPrint += " " + this.board[i] + " |";
				}
			}
			else if(i === 1 || i === 4 || i === 7) {
				if(this.board[i] === "") {
					boardToPrint += "   | ";
				}
				else {
					boardToPrint += " " + this.board[i] + " | ";
				}
			}
			else {
				if(this.board[i] === "") {
					boardToPrint += "  ";
				}
				else {
					boardToPrint += this.board[i];
				}

				if(i !== 8) {
					boardToPrint += "\n--- --- ---\n";
				}
			}
		}
		return boardToPrint;
	};

	setBoard(newBoard) {
		if (newBoard.constructor === Array) {
			if (newBoard.length === 9) {
				for(let i = 0; i < 9; ++i) {
					if (newBoard[i] !== "" && newBoard[i] !== "X" && newBoard[i] !== "O") {
						return false;
					}
				}
				this.board = newBoard;
				return true;
			}
		}
		return false;
	};

};

module.exports = tictactoe;