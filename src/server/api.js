//api.js
const express = require("express");
const router = express.Router();

router.get("/test", (request, response) => {
	response.status(200).send({test: "Hello World"});
});

module.exports = router;