//app.js
const express = require("express");
const path = require("path");
const app = express();
const api = require("./server/api");

app.use(express.static(path.join(__dirname, "../", "dist")));

app.use("/api", api);

app.get("*", (request, response) => {
	response.send({error: "Route not defined"});
});

module.exports = app;