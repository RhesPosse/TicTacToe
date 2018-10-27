//api.js
const express = require("express");
const api = express();

api.get("/test", (request, response) => {
	response.status(200).send({test: "Hello World"});
	return response;
});

module.exports = api;