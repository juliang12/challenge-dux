"use client";
import { Button } from "primereact/button";
import { useUserModal } from "@/context/UserModalContext";

const NewUserButton = () => {
  const { openModal } = useUserModal();
  return (
    <>
      <Button
        onClick={() => openModal()}
        label="Nuevo Usuario"
        icon="pi pi-plus"
        className="p-button-lg font-bold"
        style={{ background: "#3887fa", border: "none" }}
      />
    </>
  );
};

export default NewUserButton;
