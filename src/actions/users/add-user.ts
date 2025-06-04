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

    console.log(data, "data nueva");

    const parsed = userSchema.safeParse(data);

    if (!parsed.success) {
      // Retornamos el primer error de validación
      return {
        success: false,
        error: parsed.error.errors[0].message,
      };
    }

    // parsed.data tiene los datos validados y tipados
    console.log("📦 Datos validados:", parsed.data);

    // Aquí iría la lógica para guardar el usuario en la base de datos, etc.
    await addUserData({
      id: parsed.data.id,
      usuario: parsed.data.usuario,
      estado: parsed.data.estado,
      sector: parsed.data.sector,
    });
    console.log(parsed.data);
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
