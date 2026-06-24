import express from "express";
import logger from "morgan";
import mongoConnection from "./server/server.js";
import mapRoutes from "./schemas/mapRoutes.js";
import { routeValidate } from "./schemas/rutaScheme.js";

const app = express();
app.use(express.json());
app.use(logger("dev"));

app.get("/api/routes", async (req, res) => {
  const data = await mapRoutes.find();

  return res.status(200).json(data);
});

app.get("/api/routes/:id", async (req, res) => {
  const { id } = req.params;

  const data = await mapRoutes.findById(id);

  if (!data) return res.status(404).json({ message: "Route not found" });
});

app.post("/api/routes/", async (req, res) => {
  const { error, data, success } = routeValidate(req.body);

  if (!success) return res.json({ message: JSON.parse(error.message) });

  const created = await mapRoutes.create(data);

  return res.status(200).json(created);
});

export default app;
