import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://neobie:umg3ZR6PtDD0F89l@cluster0.tajwv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

// Import Routes
import postRoutes from "./routes/postRoutes.js";

app.use("/api", postRoutes);

app.listen(9000, () => {
  console.log("Listening on PORT 9000");
});
