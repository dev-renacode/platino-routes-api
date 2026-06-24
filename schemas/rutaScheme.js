import { z } from "zod";

const itemSchema = z.object({
  nombre: z.string({
    required_error: "El nombre del ítem es obligatorio",
    invalid_type_error: "El nombre del ítem debe ser un texto",
  }),
  movimiento_necesario: z.string().optional(),
  requiere_elevacion: z.boolean().optional(),
});

const sectionSchema = z.object({
  nombre_seccion: z.string({
    required_error: "El nombre de la sección es obligatorio",
  }),
  clima_especial: z.string().optional(),
});

// 2. Validación Principal de la Ruta
export const routeSchema = z.object({
  numero: z
    .number({
      required_error: "El número de la ruta es obligatorio",
      invalid_type_error: "El número debe ser un valor numérico",
    })
    .int("El número de ruta no puede tener decimales")
    .positive("El número de ruta debe ser mayor a 0"),

  nombre: z
    .string({
      required_error: "El nombre de la ruta es obligatorio",
    })
    .min(3, "El nombre debe tener al menos 3 caracteres"),

  secciones: z.array(sectionSchema).optional(),

  movimientos_progresion: z.array(z.string()).optional(),

  niveles_elevacion: z
    .number()
    .int()
    .min(1, "Debe tener al menos 1 nivel de elevación")
    .optional(),

  items_disponibles: z.array(itemSchema).optional(),
});

export const routeValidate = (data) => {
  return routeSchema.safeParse(data);
};
