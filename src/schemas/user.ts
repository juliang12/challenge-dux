import { z } from "zod";

export const userSchema = z.object({
  id: z.string().min(1, "El id es obligatorio"),
  usuario: z.string().min(1, "El nombre es obligatorio"),
  estado: z.string().min(1, "El estado es obligatorio"),
  sector: z.string().min(1, "El sector es obligatorio"),
});