//api.test.js
const request = require("supertest");
const app = require("../app");

describe("GET test", () => {
	it("should return a 200 OK status code", async () => {
		const response = await request(app).get("/api/test");
		expect(response.status).toBe(200);  
	});
	it("should return Hello World in a object", async () => {
		const response = await request(app).get("/api/test");
		expect(response.body.test).toBe("Hello World");
	});
});