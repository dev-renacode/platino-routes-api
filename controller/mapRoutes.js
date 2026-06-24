import { routeValidate } from "../schemas/rutaScheme.js";
import { mapRoutesModel } from "../model/mapRoutes.js";

export class mapRoutesController {
  static getAll = async (req, res) => {
    try {
      const data = await mapRoutesModel.getAll();
      return res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  static getById = async (req, res) => {
    try {
      const { id } = req.params;

      const data = await mapRoutesModel.getById({ id });

      if (!data) return res.status(404).json({ message: "Not found" });

      return res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  static create = async (req, res) => {
    try {
      const { error, data, success } = routeValidate(req.body);

      if (!success)
        return res.status(500).json({ message: JSON.parse(error.message) });

      const created = await mapRoutesModel.create({ data });

      return res.status(200).json(created);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
