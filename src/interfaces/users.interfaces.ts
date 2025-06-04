export interface User {
  id: string;
  estado: "ACTIVO" | "INACTIVO"; // si solo puede tener esos dos valores
  sector: string;
  usuario: string;
}
