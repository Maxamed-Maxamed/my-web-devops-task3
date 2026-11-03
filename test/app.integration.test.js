const request = require("supertest");
const app = require("../app");

describe("Express application endpoints", () => {
  test("GET / returns the homepage", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("My Web DevOps Task 3");
    expect(response.text).toContain(
      "The Node.js and Express application is running successfully."
    );
  });

  test("GET /health returns the service health status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "healthy",
      service: "my-web-devops-task3"
    });
  });
});