const request = require("supertest");
const app = require("../app");
const db = require("../src/models/db");

async function resetDatabase() {
	await db.sync({ force: true });
}

describe("Test Student Routes", () => {
	afterAll(async () => {
		await resetDatabase();
	});

	it("Creates a new Student", async () => {
		const response = await request(app)
			.post("/api/students")
			.field("name", "John Doe")
			.field("address", "Boulevard of Broken Dreams")
			.field("phone", "555-555-555");
		expect(response.statusCode).toBe(201);
	});

	it("Get students", async () => {
		const response = await request(app).get("/api/students");
		expect(response.status).toBe(200);
	});
});
