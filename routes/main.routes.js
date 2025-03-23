import { Router } from "express";
import * as Controller from "../controller/main.controller.js";

const router = Router();

router.get("/ping", (_req, res) => {
    res.status(200).json({ message: "Pong", data: new Date() });
});

router.post("/uploads/single", Controller.uploadSingleFile);

router.post("/uploads/multiple", Controller.uploadMultipleFiles);

export default router;
