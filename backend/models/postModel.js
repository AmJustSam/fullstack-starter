import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = mongoose.model("Post", postSchema); // Posts  ,,,, auto made it (plural)

const createPost = async (postData) => {
  const data = await Post.create(postData);

  return data;
};

const getPosts = async () => {
  const data = await Post.find({});

  return data;
};

export { createPost, getPosts };
