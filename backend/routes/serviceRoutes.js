import express from "express";
import CreateService, {
  DeleteService,
  GetServiceById,
  GetServices,
  UpdateService,
} from "../controller/serviceController.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Define routes for service
router.post("/", auth, CreateService);
router.get("/", GetServices);
router.get("/:id", auth, GetServiceById);
router.put("/:id", auth, UpdateService);
router.delete("/:id", auth, DeleteService);

export default router;
