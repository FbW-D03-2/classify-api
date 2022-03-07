import { Application, Request, Response } from "express";
import cors from "cors";
import apiRouter from "./routes/api.routes";
import express from "express";

export default function createServer() {
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use("/api/encrypt", (req, res, next) => {
        console.log("getting here")
        console.log(req.body)
        next();
    })

    app.use("/api", apiRouter);

    return app;
}
