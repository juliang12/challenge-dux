import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { addUser } from "@/actions";
import { updateUser } from "@/actions/users/update-user";
import { useUserContext } from "@/context/UserContext";
import { User } from "@/interfaces/users.interfaces";
import { Toast, ToastMessage } from "primereact/toast";

interface Props {
  onClose: () => void;
  userToEdit?: User;
  toastRef: React.RefObject<Toast | null>;
}

export function useUserForm({ onClose, userToEdit, toastRef }: Props) {
  const { users } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const isEditMode = !!userToEdit;

  const { control, handleSubmit, reset } = useForm<User>({
    defaultValues: {
      id: "",
      usuario: "",
      estado: "ACTIVO",
      sector: "9000",
    },
  });

  const showToast = useCallback(
    (message: string, title?: string, severity?: ToastMessage["severity"]) => {
      if (!toastRef.current) return;
      toastRef.current.show({
        severity: severity || "success",
        summary: title,
        detail: message,
        life: 3000,
      });
    },
    [toastRef]
  );

  const fieldErrors = {
    id: {
      required: "El ID es obligatorio",
      validate: (value: string) => {
        const idExists = users.some((u) => u.id === value);
        if (isEditMode) {
          return idExists && userToEdit?.id !== value
            ? "Este ID ya existe"
            : true;
        }
        return idExists ? "Este ID ya existe" : true;
      },
    },
    usuario: {
      required: "El nombre es obligatorio",
      validate: (value: string) => {
        if (isEditMode && value === userToEdit?.usuario) {
          return true; // Permite el mismo nombre si es edición
        }
        const userExists = users.some((u) => u.usuario === value);
        return userExists ? "El usuario ya existe" : true;
      },
    },
    estado: { required: "Debe seleccionar un estado" },
    sector: { required: "Debe seleccionar un sector" },
  };

  useEffect(() => {
    if (isEditMode) {
      reset(userToEdit);
    }
  }, [userToEdit, reset, isEditMode]);

  const onSubmit = async (data: User) => {
    setIsLoading(true);
    try {
      if (isEditMode && userToEdit) {
        await updateUser(userToEdit.id, data.usuario, data.estado, data.sector);
        showToast("Usuario actualizado con éxito", "Confirmado", "success");
      } else {
        await addUser(data);
        showToast("Usuario creado con éxito", "Confirmado", "success");
      }
      reset();
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage =
          error.message || "Error en el formulario de usuario";
        showToast(errorMessage, "Error", "error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    isLoading,
    isEditMode,
    fieldErrors,
  };
}
