const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/users", require("./prisma/Routes/UserRoutes"));
app.use("/api/ideas", require("./prisma/Routes/IdeaRoutes"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
	console.log(
		`server running on ${process.env.PORT} in ${process.env.NODE_ENV} mode...`
	);
});
