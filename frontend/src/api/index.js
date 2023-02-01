import axios from "axios";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const endpoint = process.env.API;
console.log(PORT);
export const api = axios.create({
	headers: { "Content-Type": "multipart/form-data" },
	baseURL: endpoint,
	timeout: 3000,
});
