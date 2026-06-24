import express from "express";
import logger from "morgan";
import { mapRoutesRouter } from "./routes/mapRoutes.routes.js";

const app = express();
app.use(express.json());
app.use(logger("dev"));

app.use("/api/routes", mapRoutesRouter);

export default app;
