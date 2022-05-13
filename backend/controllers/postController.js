// Import Models
import * as Post from "../models/postModel.js";

const getPosts = async (req, res) => {
  const data = await Post.getPosts();

  res.json(data);
};

const createPost = async (req, res) => {
  const { title, description } = req.body;
  const response = await Post.createPost({
    title: title,
    description: description,
  });

  res.json(response);
};

export { getPosts, createPost };
