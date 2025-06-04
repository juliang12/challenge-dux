"use client";
import React from "react";
import { Dialog } from "primereact/dialog";
import s from "./user-modal.module.css";
import UserForm from "../userForm/user-form";
import { useUserModal } from "@/context/UserModalContext";
import { Toast } from "primereact/toast";
import ModalHeader from "./customHeader/CustomHeader";

interface UserModalProps {
  toastRef: React.RefObject<Toast | null>;
}
const UserModal = ({ toastRef }: UserModalProps) => {
  const { selectedUser: userToEdit, isOpen, closeModal } = useUserModal();

  return (
    <Dialog
      header={<ModalHeader onClose={closeModal} />}
      visible={isOpen}
      closable={false}
      onHide={closeModal}
      breakpoints={{ "960px": "90vw" }}
      className={s.modal}
      modal
      headerStyle={{
        backgroundColor: "#0062ff",
        color: "white",
        fontWeight: "bold",
        height: "49px",
      }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "17.5px",
      }}
    >
      <UserForm
        onClose={closeModal}
        userToEdit={userToEdit ?? undefined}
        toastRef={toastRef}
      />
    </Dialog>
  );
};

export default UserModal;
