const express = require("express");
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const generateToken = require("../middleware/generateToken");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

const prisma = new PrismaClient();

const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	user && user.password === password
		? res.status(200).json({ msg: "Log in Successful", payload: user })
		: res.status(401).json({ msg: "Invalid Credential, User Does Not Exist" });
});

// Create A User
const createUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExist = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (userExist) {
		res.status(401).json({
			pay: "User Already Register",
		});
	}
	let newUser = await prisma.user.create({
		data: {
			name,
			email,
			password,
		},
	});
	const salt = await bcrypt.genSalt(10);
	newUser.password = await bcrypt.hash(newUser.password, salt);
	if (newUser) {
		res.status(200).json({
			_id: newUser.id,
			name: newUser.name,
			email: newUser.email,
			password: newUser.password,
			token: generateToken(newUser.id),
		});
	} else {
		res.status(401).json({
			payload: "Invalid Credentials",
		});
	}
});
const getAllUser = asyncHandler(async (req, res) => {
	try {
		const users = await prisma.user.findMany({
			include: {
				ideas: true,
			},
		});
		res.status(200).json({
			payload: users,
		});
	} catch (error) {
		res.status(404).json({ payload: error });
	}
});
const getUserById = asyncHandler(async (req, res) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				ideas: true,
			},
		});
		res.status(200).json({
			msg: "Success",
			payload: user,
		});
	} catch (error) {
		res.status(404).json({
			msg: "Users Not Found",
			payload: error,
		});
	}
});
const updateUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const { id } = req.params;
		const user = await prisma.user.update({
			data: {
				name,
				email,
				password,
			},
			where: {
				id: Number(id),
			},
		});
		res.status(200).json({
			msg: "User Updated Successfully",
			payload: user,
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({ msg: "Error in Updating", payload: error });
	}
});

const deleteUser = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const user = await prisma.user.delete({
			where: {
				id: Number(id),
			},
			include: {
				ideas: true,
			},
		});
		console.log(user);
		res.status(200).json({
			msg: "User Deleted ",
			payload: user,
		});
	} catch (error) {
		res.status(404).json({
			msg: "Not Authorized",
			payload: error,
		});
	}
});
router.post("/login", authUser);
router.route("/register").post(createUser);
router.route("/").get(auth, getAllUser);
router
	.route("/:id")
	.get(auth, getUserById)
	.put(auth, updateUser)
	.delete(auth, deleteUser);

module.exports = router;
