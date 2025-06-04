"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { ConfirmDialog } from "primereact/confirmdialog";
import { usuarioBodyTemplate } from "@/utils/table.utils";
import { ActionBodyTemplate } from "./constants/ActionBodyTemplate";
import { useUserContext } from "@/context/UserContext";
import { useUserModal } from "@/context/UserModalContext";
import { useUserTablePagination } from "@/hooks/useUserTablePagination";
import { Toast } from "primereact/toast";
import UserModal from "../modal/user-modal";
import { useRef } from "react";

const Table = () => {
  const { users, totalCount } = useUserContext();
  const { openModal } = useUserModal();
  const { first, rows, handlePageChange } = useUserTablePagination();
  const toastRef = useRef<Toast | null>(null);

  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        lazy
        first={first}
        rows={rows}
        totalRecords={totalCount}
        onPage={handlePageChange}
        rowsPerPageOptions={[5, 10, 25, 50]}
        emptyMessage="No se encontraron usuarios"
      >
        <Column field="id" header="ID" sortable style={{ width: "20%" }} />

        <Column
          field="usuario"
          header="Usuario"
          body={usuarioBodyTemplate(openModal)}
          sortable
          style={{ width: "20%" }}
        />

        <Column
          field="estado"
          header="Estado"
          sortable
          style={{ width: "20%" }}
        />

        <Column
          field="sector"
          header="Sector"
          sortable
          style={{ width: "20%" }}
        />

        <Column
          header="Acciones"
          body={ActionBodyTemplate}
          style={{ width: "15%" }}
        />
      </DataTable>
      <ConfirmDialog />
      <Toast ref={toastRef} />
      <UserModal toastRef={toastRef} />
    </div>
  );
};

export default Table;
