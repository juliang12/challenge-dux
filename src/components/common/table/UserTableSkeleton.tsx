import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";

const UserTableSkeleton = () => {
  const items = Array.from({ length: 5 }, (v, i) => ({
    id: i,
    usuario: `Usuario ${i}`,
    estado: `Estado ${i}`,
    sector: `Sector ${i}`,
  }));

  return (
    <div className="card">
      <DataTable value={items} className="p-datatable-striped">
        <Column
          field="id"
          header="ID"
          style={{ width: "20%" }}
          body={<Skeleton />}
        />
        <Column
          field="usuario"
          header="Usuario"
          style={{ width: "20%" }}
          body={<Skeleton />}
        />
        <Column
          field="estado"
          header="Estado"
          style={{ width: "20%" }}
          body={<Skeleton />}
        />
        <Column
          field="sector"
          header="Sector"
          style={{ width: "20%" }}
          body={<Skeleton />}
        />
        <Column
          header="Acciones"
          style={{ width: "15%" }}
          body={<Skeleton />}
        />
      </DataTable>
    </div>
  );
};

export default UserTableSkeleton; 