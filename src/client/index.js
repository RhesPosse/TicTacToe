let $ = require("jquery");

let $squares = $("td");
let $message = $("#message");

$squares.each(function() {
	$(this).on("click", function() {
		move($(this));
	});
});

$("#reset").on("click", function () {
	$(this).on("click", function() {
		newGame();
	});
});

updatePage();

function move(element) {
	fetch("./api/move/" + element.attr("id")).then((response) => {
		response.json().then((data) => { 
			console.log(data.message);
			checkGameOver();
			updatePage();
		});
	}).catch((err) => {
		console.log(err);
	});
}

function checkGameOver() {
	fetch("./api/gameState").then((response) => {
		response.json().then((data) => { 
			if (data.state !== "Unfinished") {
				console.log(data.state)
			}
		});
	}).catch((err) => {
		console.log(err);
	});
}

function newGame() {
	fetch("./api/initializeGame").then((response) => {
		response.json().then((data) => { 
			console.log(data.message);
			updatePage();
		});
	}).catch((err) => {
		console.log(err);
	});
};

function updatePage() {
	fetch("./api/gameState").then((response) => {
		response.json().then((data) => { 
			$squares.each(function() {
				$(this).text(data.board[$(this).attr("id") - 1]);
			});
			if (data.state === "Unfinished") {
				$message.text(data.currentPlayer + " it‘s your turn!");
			} else {
				$message.text(data.state);
			}
		});
	}).catch((err) => {
		console.log(err);
	});
};