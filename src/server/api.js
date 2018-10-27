//api.js
const express = require("express");
const router = express.Router();

router.get("/initializeGame", (request, response) => {
	response.status(200).send({message: "New Game Started"});
});

module.exports = router;