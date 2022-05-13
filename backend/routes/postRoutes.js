import express from "express";
const router = express.Router();

// Import Controllers
import { getPosts, createPost } from "../controllers/postController.js";

router.get("/customers", getPosts);
router.post("/customers/create", createPost);

export default router;
