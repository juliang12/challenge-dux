import { deleteUser } from "@/actions/users/delete-user";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import { useRef } from "react";

interface User {
  id: number;
  // otros campos si los necesitás
}

export const ActionBodyTemplate = (rowData: User) => {
  const toast = useRef<Toast | null>(null);

  const accept = (id: number) => {
    deleteUser(id);
    // Lógica para eliminar aquí
    toast.current?.show({
      severity: "info",
      summary: "Confirmed",
      detail: "Usuario eliminado",
      life: 3000,
    });
    console.log("Eliminar usuario con id:", rowData.id);
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Cancelled",
      detail: "Operación cancelada",
      life: 3000,
    });
  };

  const confirm1 = (id: number) => {
    console.log(id);
    confirmDialog({
      message: "¿Estás seguro que deseas eliminar este usuario?",
      header: "Confirmar Eliminación",
      icon: "pi pi-exclamation-triangle",
      accept: () => accept(id),
      reject,
      defaultFocus: "accept",
    });
  };

  return (
    <>
      <Toast ref={toast} />

      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger p-button-text"
        onClick={() => confirm1(rowData.id)}
        aria-label="Eliminar usuario"
      />
    </>
  );
};
