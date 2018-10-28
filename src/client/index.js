let $ = require("jquery");

fetch("./api/initializeGame").then((response) => {
	response.json().then((data) => { 
		console.log(data.message);
	});
}).catch((err) => {
	console.log("oof");
});

$("td").each(function() {
	$(this).on("click", function() {
		move($(this));
	});
});

function move(element) {
	fetch("./api/move/" + element.attr("id")).then((response) => {
		response.json().then((data) => { 
			console.log(data.message);
			if (data.updatedSquare !== "") {
				element.text(data.updatedSquare);
			}
			checkGameOver();
		});
	}).catch((err) => {
		console.log("oof");
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
		console.log("oof");
	});
}