const express = require("express");
const asyncHandler = require("express-async-handler");
const { PrismaClient } = require("@prisma/client");
const auth = require("../middleware/authMiddleware");

const router = express.Router();
const prisma = new PrismaClient();

const createIdea = asyncHandler(async (req, res) => {
	try {
		const { title, details, userEmail } = req.body;
		const idea = await prisma.idea.create({
			data: {
				title,
				details,
				published: false,
				user: {
					connect: {
						email: userEmail,
					},
				},
			},
		});
		res.status(200).json({
			msg: "Idea Created",
			payload: idea,
		});
	} catch (error) {
		res.status(401).json({
			msg: "Unable to Create An Idea, Invalid Credentials",
			payload: error,
		});
	}
});

const updateIdea = asyncHandler(async (req, res) => {
	try {
		const { title, details } = req.body;
		const { id } = req.params;
		const idea = await prisma.idea.update({
			data: {
				title,
				details,
				published: true,
			},
			where: {
				id: Number(id),
			},
			include: {
				user: true,
			},
		});
		res.status(200).json({
			msg: "Idea Updated Successfully",
			payload: idea,
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({
			msg: "Not Authorized",
			payload: error,
		});
	}
});

const getAllIdeas = asyncHandler(async (req, res) => {
	try {
		const ideas = await prisma.idea.findMany({
			include: {
				user: true,
			},
		});
		console.log(ideas);
		res.status(200).json({
			msg: "User's Ideas",
			payload: ideas,
		});
	} catch (error) {
		res.status(404).json({
			msg: "No User Found",
			payload: error,
		});
	}
});
const getIdeaById = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const idea = await prisma.idea.findUnique({
			where: {
				id: Number(id),
			},
			include: {
				user: true,
			},
		});
		res.status(200).json({
			msg: "Success",
			payload: idea,
		});
	} catch (error) {
		console.log(error);
		res.status(401).json({
			msg: "Not Authorized",
			payload: error,
		});
	}
});
const deleteIdea = asyncHandler(async (req, res) => {
	try {
		const { id } = req.params;
		const idea = await prisma.idea.delete({
			where: {
				id: Number(id),
			},
		});
		res.status(200).json({
			msg: "Success",
			payload: idea,
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			msg: "Idea Not Found",
			payload: error,
		});
	}
});
router.route("/").get(auth, getAllIdeas);
router.route("/add").post(auth, createIdea);
router
	.route("/:id")
	.get(auth, getIdeaById)
	.put(auth, updateIdea)
	.delete(auth, deleteIdea)
	.get(auth, getIdeaById);

module.exports = router;
