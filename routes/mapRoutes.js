import { Router } from "express";

export const mapRoutes = Router();

mapRoutes.get("/", (req, res) => {
  res.json({ message: "routes" });
});

mapRoutes.get("/:id", (req, res) => {});
mapRoutes.post("/", (req, res) => {});
