const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const auth = asyncHandler(async (req, res, next) => {
	let token;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
	}
	{
		try {
			token = req.headers.authorization.split(" ")[1];
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			req.user = await prisma.user.findUnique({
				where: {
					id: decoded.id,
				},
			});
			next();
		} catch (error) {
			console.log(error);
			res.status(401).json({
				payload: "Not Authorized, Token Failed",
			});
		}
	}
});

module.exports = auth;
