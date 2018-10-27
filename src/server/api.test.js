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