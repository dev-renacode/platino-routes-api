import { Router } from "express";

export const mapRoutes = Router();

mapRoutes.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
mapRoutes.get("/:id", (req, res) => {});
mapRoutes.post("/", (req, res) => {});
