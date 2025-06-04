import { User } from "@/interfaces/users.interfaces";

export const usuarioBodyTemplate =
  (onEdit: (user: User) => void) =>
  function UsuarioBodyTemplate(rowData: User) {
    return (
      <span
        onClick={() => onEdit(rowData)}
        style={{ color: "#0763E7", cursor: "pointer" }}
        className="font-bold capitalize text-sm underline"
      >
        {rowData.usuario}
      </span>
    );
  };
