"use client";
import { User } from "@/interfaces/users.interfaces";
import { Column, ColumnProps } from "primereact/column";
import { DataTable } from "primereact/datatable";

interface Props {
  users: User[];
  totalCount: number;
  first: number;
  rows: number;
  onPageChange: (event: { first: number; rows: number }) => void;
  columns: ColumnProps[];
  loading?: boolean;
}

const UsersTableClient = ({
  users,
  totalCount,
  first,
  rows,
  onPageChange,
  columns,
}: Props) => {
  return (
    <div className="card">
      <DataTable
        value={users}
        paginator
        lazy
        first={first}
        rows={rows}
        totalRecords={totalCount}
        onPage={onPageChange}
        rowsPerPageOptions={[5, 10, 25, 50]}
        emptyMessage="No se encontraron usuarios"
      >
        {columns.map((col, idx) => (
          <Column key={idx} {...col} />
        ))}
      </DataTable>
    </div>
  );
};

export default UsersTableClient;
