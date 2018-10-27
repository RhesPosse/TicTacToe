const request = require("supertest");
const api = require("./api");

describe("GET test", () => {
  it("should return a 200 OK status code", async () => {
    const response = await request(api).get("/test");    
    expect(response.status).toBe(200);  
  });  
  it("should return the greeting in a object", async () => {    
  	const response = await request(api).get("/test");    
  	expect(response.body.test).toBe("Hello World");  
  });
});