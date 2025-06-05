"use client";
import { useUserContext } from "@/context/UserContext";
import { useUserModal } from "@/context/UserModalContext";
import { useUserTablePagination } from "@/hooks/useUserTablePagination";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import UserModal from "../modal/user-modal";
import { useRef } from "react";
import UsersTable from "./UsersTable";
import { getUserTableColumns } from "./constants/userTableColumns";

const UserTableContainer = () => {
  const { users, totalCount } = useUserContext();
  const { openModal } = useUserModal();
  const { first, rows, handlePageChange } = useUserTablePagination();
  const toastRef = useRef(null);

  const columns = getUserTableColumns({ openModal });

  return (
    <div className="card">
      <UsersTable
        users={users}
        totalCount={totalCount}
        first={first}
        rows={rows}
        onPageChange={handlePageChange}
        columns={columns}
      />
      <ConfirmDialog />
      <Toast ref={toastRef} />
      <UserModal toastRef={toastRef} />
    </div>
  );
};

export default UserTableContainer;
