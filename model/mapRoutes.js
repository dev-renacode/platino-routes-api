import mapRoutes from "../schemas/mapRoutes.js";

export class mapRoutesModel {
  static getAll = async () => {
    return await mapRoutes.find();
  };

  static getById = async ({ id }) => {
    const data = await mapRoutes.findById(id);

    if (!data) return null;

    return data;
  };

  static create = async ({ data }) => {
    return await mapRoutes.create(data);
  };
}
