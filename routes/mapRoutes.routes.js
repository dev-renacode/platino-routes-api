import { Router } from "express";
import { mapRoutesController } from "../controller/mapRoutes.js";

export const mapRoutesRouter = Router();

mapRoutesRouter.get("/", mapRoutesController.getAll);

mapRoutesRouter.get("/:id", mapRoutesController.getById);

mapRoutesRouter.post("/", mapRoutesController.create);
