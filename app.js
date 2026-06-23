import express from "express";
import logger from "morgan";
import { mapRoutes } from "./routes/mapRoutes.js";

const app = express();
app.use(logger("dev"));

app.use("/api/routes", mapRoutes);

export default app;
