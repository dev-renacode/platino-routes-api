import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    movimiento_necesario: {
      type: String,
      default: "Ninguno",
    },
    requiere_elevacion: {
      type: Boolean,
      default: false,
    },
  },
  { id: false },
);

const rutaSchema = new mongoose.Schema(
  {
    numero: {
      type: Number,
      required: true,
      unique: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    secciones: [
      {
        nombre_seccion: String,
        clima_especial: { type: String, default: "Normal" },
      },
    ],
    movimientos_progresion: [
      {
        type: String,
      },
    ],
    niveles_elevacion: {
      type: Number,
      default: 1,
    },
    items_disponibles: [itemSchema],
  },
  { timestamps: true },
);

export default mongoose.model("Ruta", rutaSchema);
