const express = require("express");
const cors = require("cors");
const db = require("./src/models/db");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

db.sync().then(() => console.log(`Connected database: ${process.env.DB_NAME}`));

app.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		error: "500 Internal Server Error - Please contact the system administrator",
	});
});

module.exports = app;
