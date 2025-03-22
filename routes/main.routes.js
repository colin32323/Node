import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
    res.status(200).json({ message: "Pong", date: new Date() });
});

router.post("/upload", (req, res) => {
    res.status(200).json({ message: "Upload route" });
});

export default router;
