//api.test.js
const request = require("supertest");
const app = require("../app");

describe("GET invalid route", () => {
	it("should return error in a object", async () => {
		const response = await request(app).get("/test");
		expect(response.body).toHaveProperty("error");
	});
});

describe("GET initializeGame", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/initializeGame");
		expect(response.status).toBe(200);  
	});
	it("should return message in a object", async () => {
		const response = await request(app).get("/api/initializeGame");
		expect(response.body).toHaveProperty("message");
	});
});

describe("GET getBoard", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/getBoard");
		expect(response.status).toBe(200);  
	});
	it("should return board in a object", async () => {
		const response = await request(app).get("/api/getBoard");
		expect(response.body).toHaveProperty("board");
	});
});

describe("GET getTotalMoves", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/getTotalMoves");
		expect(response.status).toBe(200);  
	});
	it("should return totalMoves in a object", async () => {
		const response = await request(app).get("/api/getTotalMoves");
		expect(response.body).toHaveProperty("totalMoves");
	});
});

describe("GET getWinner", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/getWinner");
		expect(response.status).toBe(200);  
	});
	it("should return winner in a object", async () => {
		const response = await request(app).get("/api/getWinner");
		expect(response.body).toHaveProperty("winner");
	});
});

describe("GET getIsX", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/getIsX");
		expect(response.status).toBe(200);  
	});
	it("should return isX in a object", async () => {
		const response = await request(app).get("/api/getIsX");
		expect(response.body).toHaveProperty("isX");
	});
});

describe("GET itsADraw", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/itsADraw");
		expect(response.status).toBe(200);  
	});
	it("should return draw in a object", async () => {
		const response = await request(app).get("/api/itsADraw");
		expect(response.body).toHaveProperty("draw");
	});
});

describe("GET printBoard", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/printBoard");
		expect(response.status).toBe(200);  
	});
	it("should return boardPrinted in a object", async () => {
		const response = await request(app).get("/api/printBoard");
		expect(response.body).toHaveProperty("boardPrinted");
	});
});

describe("GET move", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/move/1");
		expect(response.status).toBe(200);  
	});
	it("should return multiple properties in a object", async () => {
		const response = await request(app).get("/api/move/1");
		expect(response.body).toHaveProperty("message");
		expect(response.body).toHaveProperty("updatedSquare");
	});
	it("should return multiple properties in a object on invalid move", async () => {
		const response = await request(app).get("/api/move/100");
		expect(response.body).toHaveProperty("message");
		expect(response.body).toHaveProperty("updatedSquare");
	});
});

describe("GET gameState", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/gameState");
		expect(response.status).toBe(200);  
	});
	it("should return multiple properties in a object", async () => {
		const response = await request(app).get("/api/gameState");
		expect(response.body).toHaveProperty("board");
		expect(response.body).toHaveProperty("boardPrinted");
		expect(response.body).toHaveProperty("totalMoves");
		expect(response.body).toHaveProperty("currentPlayer");
		expect(response.body).toHaveProperty("state");
	});
});