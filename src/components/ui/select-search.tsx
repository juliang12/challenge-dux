import { Dropdown } from "primereact/dropdown";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectSearchProps {
  label?: string;
  id: string;
  options: Option[];
  value: string | null;
  onChange: (value: string | null) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  showClear?: boolean;
  filter?: boolean;
  error?: string;
  containerClassName?: string;
}

const SelectSearch: React.FC<SelectSearchProps> = ({
  label,
  id,
  options,
  value,
  onChange,
  placeholder = "Seleccionar...",
  className = "w-full",
  style,
  showClear = true,
  filter = true,
  containerClassName = "field mb-3",
  error,
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className="block mb-sm font-semibold text-md">
          {label}
        </label>
      )}
      <div
        className="flex align-items-center w-full"
        style={{ position: "relative" }}
      >
        <i
          className="pi pi-search text-icon"
          style={{
            fontSize: "14px",
            marginLeft: "1rem",
            position: "absolute",
            left: 0,
            zIndex: 2,
          }}
        />
        <Dropdown
          id={id}
          name={id}
          options={options}
          value={value}
          onChange={(e) => onChange(e.value)}
          placeholder={placeholder}
          className={className}
          style={{ paddingLeft: "2rem", height: "38px", ...style }}
          showClear={showClear}
          filter={filter}
        />
      </div>
      {error && <small className="p-error block mt-1">{error}</small>}
    </div>
  );
};

export default SelectSearch;
