"use server";
import { userSchema } from "@/schemas/user";
import { updateUserData } from "@/services/users";
import { revalidatePath } from "next/cache";

export async function updateUser(
  id: string,
  usuario: string,
  estado: string,
  sector: string
) {
  try {
    const data = {
      id: id.toString(),
      usuario,
      estado,
      sector: sector.toString(),
    };

    console.log(data, "data");

    const parsed = userSchema.safeParse(data);

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.errors[0].message,
      };
    }


    await updateUserData(parsed.data);

    revalidatePath("/");
    return {
      success: true,
      data: parsed.data,
    };
  } catch (error) {
    console.error("Error al agregar usuario:", error);
    return {
      success: false,
      error: "Error al agregar usuario",
    };
  }
}
