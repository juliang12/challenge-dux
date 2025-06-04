import { axiosInstance } from "@/config/axios";

export const getUsers = async (params: string) => {
  const response = await axiosInstance.get(`/personal?${params}&sector=9000`);
  const totalCount = response.headers["x-total-count"];

  return {
    users: response.data,
    totalCount: Number(totalCount),
  };
};

export const addUserData = async (user: {
  id: string;
  usuario: string;
  estado: string;
  sector: string;
}) => {
  const response = await axiosInstance.post("/personal?sector=9000", user);

  return response.data;
};

export const updateUserData = async (user: {
  id: string;
  usuario: string;
  estado: string;
  sector: string;
}) => {
  try {
    const { data } = await axiosInstance.patch(
      `/personal/${user.id}?sector=9000`,
      user
    );
    if (!data) throw new Error("Error al guardar el usuario");
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
