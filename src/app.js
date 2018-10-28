//app.js
const express = require("express");
const app = express();
const api = require("./server/api");

app.use("/api", api);

app.get("*", (request, response) => {
	response.send({error: "Route not defined"});
});

module.exports = app;