import { Router } from "express";
import * as Controller from "../controller/main.controller.js";

const router = Router();

router.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong", date: new Date() });
});

router.post("/upload-single", Controller.uploadSingleFile, (req, res) => {
    if (!req.file)
        return res.status(400).json({ message: "File not uploaded" });
    res.status(200).json({
        message: "File uploaded successfully",
        data: req.file,
    });
});

router.post("/upload-multiple", Controller.uploadMultipleFiles, (req, res) => {
    if (!req.files || req.files.length === 0)
        return res.status(400).json({ message: "Files not uploaded" });
    res.status(200).json({
        message: "Files uploaded successfully",
        data: req.files,
    });
});

export default router;
