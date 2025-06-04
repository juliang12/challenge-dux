"use server";

import { userSchema } from "@/schemas/user";
import { addUserData } from "@/services/users";
import { revalidatePath } from "next/cache";

interface Params {
  id: string;
  usuario: string;
  estado: string;
  sector: string;
}

export async function addUser({
  id,
  usuario,
  estado,
  sector,
}: Params) {
  try {
    const data = {
      id,
      usuario,
      estado,
      sector,
    };

    const parsed = userSchema.safeParse(data);

    if (!parsed.success) {
      // Retornamos el primer error de validación
      return {
        success: false,
        error: parsed.error.errors[0].message,
      };
    }

    await addUserData({
      id: parsed.data.id,
      usuario: parsed.data.usuario,
      estado: parsed.data.estado,
      sector: parsed.data.sector,
    });

    revalidatePath("/");
    return {
      success: true,
      error: null,
    };
  } catch (error) {
    console.error("🛑 Error al crear usuario:", error);
    return {
      success: false,
      error: "Ocurrió un error inesperado.",
    };
  }
}
