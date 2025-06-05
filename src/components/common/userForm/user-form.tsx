"use client";
import { TextField, SelectSearch } from "@/components/ui";
import { useUserForm } from "@/hooks/useUserForm";
import { User } from "@/interfaces/users.interfaces";
import { estados } from "@/utils/options-form.utils";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Controller } from "react-hook-form";
import s from "./user-form.module.css";

interface UserFormProps {
  onClose: () => void;
  userToEdit?: User;
  toastRef: React.RefObject<Toast | null>;
}

const UserForm = ({ onClose, userToEdit, toastRef }: UserFormProps) => {
  const {
    control,
    handleSubmit,
    isLoading,
    onSubmit,
    fieldErrors,
    isEditMode,
  } = useUserForm({ onClose, userToEdit, toastRef });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex-col justify-content-start gap-lg pb-xl">
          <Controller
            name="id"
            control={control}
            defaultValue=""
            disabled={!!isEditMode}
            rules={fieldErrors.id}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Id:"
                className="rounded w-full"
                labelClassName="mb-sm font-semibold text-md"
                id="id"
                placeholder="Ingrese el id del usuario"
                error={error?.message}
              />
            )}
          />

          <Controller
            name="usuario"
            control={control}
            rules={fieldErrors.usuario}
            defaultValue=""
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                type="text"
                label="Nombre:"
                className="rounded w-full"
                labelClassName="mb-sm font-semibold text-md"
                id="usuario"
                placeholder="Ingrese el nombre del usuario"
                error={error?.message}
              />
            )}
          />
          <Controller
            name="estado"
            control={control}
            rules={fieldErrors.estado}
            render={({ field, fieldState: { error } }) => (
              <SelectSearch
                containerClassName="w-full"
                {...field}
                label="Estado:"
                id="estado"
                className="rounded w-full"
                options={estados}
                placeholder="Seleccionar el estado"
                error={error?.message}
              />
            )}
          />
        </div>
        <div
          className={`flex justify-content-center align-items-center gap-2 pt-base ${s.formFooter}`}
        >
          <Button
            loading={isLoading}
            type="submit"
            label="Confirmar"
            icon="pi pi-check small-icon"
            className="p-button-primary font-semibold w-fit border-round-md text-sm"
          />
          <Button
            type="button"
            label="Cancelar"
            icon="pi pi-check custom-icon-size"
            className="p-button-outlined font-semibold w-fit border-round-md text-sm"
            onClick={onClose}
          />
        </div>
      </form>
    </>
  );
};

export default UserForm;
