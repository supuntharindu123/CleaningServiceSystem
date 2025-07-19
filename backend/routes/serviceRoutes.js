import express from "express";
import CreateService, {
  DeleteService,
  GetServiceById,
  GetServices,
  UpdateService,
} from "../controller/serviceController.js";

const router = express.Router();

router.post("/", CreateService);
router.get("/", GetServices);
router.get("/:id", GetServiceById);
router.put("/:id", UpdateService);
router.delete("/:id", DeleteService);

export default router;
