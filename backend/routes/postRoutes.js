import express from "express";
const router = express.Router();

// Import Controllers
import { getPosts, createPost } from "../controllers/postController.js";

router.get("/posts", getPosts);
router.post("/posts/create", createPost);

export default router;
