"use server";

import { axiosInstance } from "@/config/axios";
import { revalidatePath } from "next/cache";

export const deleteUser = async (id: number) => {
  try {
    const { data } = await axiosInstance.delete(`/personal/${id}?sector=9000`);

    revalidatePath("/");
    return data;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
