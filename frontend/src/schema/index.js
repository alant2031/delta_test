import * as yup from "yup";

export const studentSchema = yup.object().shape({
	name: yup.string().required("Required"),
	address: yup.string().required("Required"),
	phone: yup
		.string()
		.matches("^\\d[\\d-]{9,22}\\d$", "Not a valide phone")
		.required("Required"),
	file: yup.string(),
});
