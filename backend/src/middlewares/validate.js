const Joi = require("joi");
const schema = Joi.object().keys({
	name: Joi.string().when("$method", {
		is: "POST",
		then: Joi.string().required(),
	}),
	address: Joi.string().when("$method", {
		is: "POST",
		then: Joi.string().required(),
	}),
	phone: Joi.string()
		.pattern(new RegExp("^\\d[\\d-]{9,22}\\d$"), "VALID PHONE NUMBER")
		.when("$method", {
			is: "POST",
			then: Joi.string().required(),
		}),
	file: Joi.any().meta({ swaggerType: "file" }),
});

module.exports = (req, res, next) => {
	const { error } = schema.validate(req.body);
	const valid = error == null;
	if (valid) {
		console.log("Valid");
		next();
	} else {
		const { details } = error;
		const message = details.map((i) => i.message).join(",");

		console.log("ERROR:", message);
		res.status(422).json({ error: message });
	}
};
