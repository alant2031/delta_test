const path = require("path");
const fs = require("fs");
const StudentRepository = require("../models/studentsModel");

const not_found = "404 Not Found - The requested resource could not be located";

const findAll = async (_, res) => {
	const students = await StudentRepository.findAll();
	return res.json({ students });
};

const findStudent = async (req, res) => {
	const result = await StudentRepository.findByPk(req.params.id);
	if (result) {
		return res.json(result);
	}
	return res.status(404).json({
		error: not_found,
	});
};

const addStudent = async (req, res) => {
	console.log(`HAVE FILE: ${!!req.file}`);
	const result = await StudentRepository.create({
		name: req.body.name,
		address: req.body.address,
		phone: req.body.phone,
		pfp: req.file ? req.file.filename : null,
	});

	return res.status(201).json(result);
};

const updateStudent = async (req, res) => {
	const result = await StudentRepository.findByPk(req.params.id);
	if (result) {
		if (req.file) {
			result.pfp &&
				fs.unlink(
					path.join(__dirname, "../../uploads/", result.pfp),
					(err) => {
						if (err) throw err;
						console.log("File deleted successfully.");
					}
				);
			result.update({ ...req.body, pfp: req.file.filename });
			return res.json(result);
		}
		result.update(req.body);
		return res.json(result);
	}
	return res.status(404).json({
		error: not_found,
	});
};

const deleteStudent = async (req, res) => {
	const destroyed = await StudentRepository.destroy({
		where: {
			id: req.params.id,
		},
	});
	if (destroyed) {
		return res.status(204).json();
	}
	return res.status(404).json({
		error: not_found,
	});
};

const getFile = async (req, res) => {
	const result = await StudentRepository.findByPk(req.params.id);
	if (result && result.pfp) {
		return res.sendFile(path.join(__dirname, "../../uploads/", result.pfp));
	}
	return res.status(404).json({ error: not_found });
};

module.exports = {
	findAll,
	findStudent,
	addStudent,
	updateStudent,
	deleteStudent,
	getFile,
};
