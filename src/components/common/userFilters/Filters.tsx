"use client";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import SelectSearch from "@/components/ui/select-search";

import { useFilters } from "@/hooks/useFilters";

const estados = [
  { label: "Habilitado", value: "ACTIVO" },
  { label: "Deshabilitado", value: "INACTIVO" },
];

export default function Filters() {
  const { filters, updateFilter, handleSearch } = useFilters();

  return (
    <div className="w-full flex flex-column md:flex-row align-items-center justify-content-between gap-2">
      {/* Buscar */}
      <IconField className="md:w-3 w-full" iconPosition="left">
        <InputIcon className="pi pi-search text-sm text-icon"> </InputIcon>
        <InputText
        
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          style={{ width: "100%", height: "38px", borderRadius: "6px" }}
        />
      </IconField>
      <SelectSearch
        containerClassName="w-full"
        id="estado"
        options={estados}
        className="w-full rounded"
        placeholder="Seleccionar el Estado"
        style={{ paddingLeft: "2rem", height: "38px" }}
        value={filters.estado}
        onChange={(value) => updateFilter("estado", value)}
      />
      <div className="flex gap-2">
        <Button
          icon="pi pi-filter-fill"
          style={{
            width: "42px",
            height: "34px",
            background: "#64748B",
            border: "none",
          }}
        />
        <Button
          icon="pi pi-sliders-v"
          style={{
            width: "42px",
            height: "34px",
            background: "#64748B",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}
