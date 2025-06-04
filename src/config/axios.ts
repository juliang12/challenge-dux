import axios from "axios";

const isServer = typeof window === "undefined";
console.log(isServer);  
export const axiosInstance = axios.create({
  baseURL: isServer
    ? process.env.API_URL // solo disponible en el servidor
    : process.env.NEXT_PUBLIC_API_URL, // para el cliente
});
