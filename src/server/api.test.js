//api.test.js
const request = require("supertest");
const app = require("../app");

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