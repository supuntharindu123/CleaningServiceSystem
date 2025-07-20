import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utill/db.js";
import ServiceRouter from "./routes/serviceRoutes.js";
import BookingRouter from "./routes/bookingRoutes.js";
import AuthRouter from "./routes/authRoutes.js";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/services", ServiceRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/auth", AuthRouter);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connectDB();
});
