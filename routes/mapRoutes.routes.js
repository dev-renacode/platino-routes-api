import { Router } from "express";
import mongoConnection from "../server/server.js";
import mapRoutes from "../schemas/mapRoutes.js";
import { routeValidate } from "../schemas/rutaScheme.js";

export const mapRoutesRouter = Router();

mapRoutesRouter.get("/", async (req, res) => {
  try {
    const data = await mapRoutes.find();

    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

mapRoutesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await mapRoutes.findById(id);

    if (!data) return res.status(404).json({ message: "Route not found" });

    return res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

mapRoutesRouter.post("/", async (req, res) => {
  try {
    const { error, data, success } = routeValidate(req.body);

    if (!success)
      return res.status(500).json({ message: JSON.parse(error.message) });

    const created = await mapRoutes.create(data);

    return res.status(200).json(created);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
