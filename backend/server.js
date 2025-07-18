import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utill/db.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
