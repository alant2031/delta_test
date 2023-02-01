const express = require("express");
const rescue = require("express-rescue");
const routes = express.Router();
const students = require("./src/controllers/students");
const validate = require("./src/middlewares/validate");
const uploadFile = require("./src/middlewares/upload");

routes.get("/students", rescue(students.findAll));
routes.get("/students/:id", rescue(students.findStudent));
routes.get("/students/:id/pfp", rescue(students.getFile));
// routes.post("/pfp", uploadFile, students.addFile);
routes.post("/students", uploadFile, validate, rescue(students.addStudent));
routes.patch(
	"/students/:id",
	uploadFile,
	validate,
	rescue(students.updateStudent)
);
routes.delete("/students/:id", rescue(students.deleteStudent));

module.exports = routes;
