"use client";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import React from "react";

const InvoiceTableSkeleton = () => {
  const items = Array.from({ length: 5 }, (_, i) => ({
    code: i,
    name: `Item ${i}`,
    category: `Category ${i}`,
    quantity: i * 10,
  }));

  // Función para renderizar skeleton ocupando todo el ancho
  const skeletonBody = () => <Skeleton width="100%" height="1.5rem" />;

  return (
    <DataTable
      value={items}
      className="p-datatable-striped w-full"
      tableStyle={{ tableLayout: "fixed", width: "100%" }}
    >
      <Column
        field="code"
        header="Code"
        style={{ width: "25%" }}
        body={skeletonBody}
      />
      <Column
        field="name"
        header="Name"
        style={{ width: "25%" }}
        body={skeletonBody}
      />
      <Column
        field="category"
        header="Category"
        style={{ width: "25%" }}
        body={skeletonBody}
      />
      <Column
        field="quantity"
        header="Quantity"
        style={{ width: "25%" }}
        body={skeletonBody}
      />
    </DataTable>
  );
};

export default InvoiceTableSkeleton;
