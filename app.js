import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import mainRouter from "./routes/main.routes.js";

const app = express();

// Middleware
app.use(express.json());

app.use("/api", mainRouter);

app.listen(process.env.PORT, () => {
    console.log("Server running on port ", process.env.PORT);
});
