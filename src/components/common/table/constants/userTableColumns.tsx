import { usuarioBodyTemplate } from "@/utils/table.utils";
import { ActionBodyTemplate } from "./ActionBodyTemplate";
import { User } from "@/interfaces/users.interfaces";

interface Props {
  openModal: (user?: User | null) => void;
}

export const getUserTableColumns = ({ openModal }: Props) => [
  {
    field: "id",
    header: "ID",
    sortable: true,
    style: { width: "20%" },
  },
  {
    field: "usuario",
    header: "Usuario",
    body: usuarioBodyTemplate(openModal),
    sortable: true,
    style: { width: "20%" },
  },
  {
    field: "estado",
    header: "Estado",
    sortable: true,
    style: { width: "20%" },
  },
  {
    field: "sector",
    header: "Sector",
    sortable: true,
    style: { width: "20%" },
  },
  {
    header: "Acciones",
    body: ActionBodyTemplate,
    style: { width: "15%" },
  },
];
