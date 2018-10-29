//app.js
const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const api = require("./server/api");


app.use(cookieParser());
app.use(session({secret: "Secret TicTacToe techniques"}));
app.use(express.static(path.join(__dirname, "../", "dist")));
app.use("/api", api);



app.get("*", (request, response) => {
	response.send({error: "Route not defined"});
});

module.exports = app;