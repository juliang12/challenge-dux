import { InputText } from 'primereact/inputtext'
import React from 'react'

interface TextFieldProps {
  label?: string;
  id: string;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  labelClassName?: string;
  containerClassName?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  id,
  placeholder,
  className = "w-full",
  style,
  disabled = false,
  required = false,
  error,
  type = 'text',
  labelClassName = "block font-semibold text-17",
  containerClassName = "field mb-3",
  icon,
  iconPosition = "left"
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div
        className="flex align-items-center w-full"
        style={{ position: "relative" }}
      >
        {icon && iconPosition === "left" && (
          <i
            className={icon}
            style={{
              fontSize: "14px",
              marginLeft: "1rem",
              position: "absolute",
              left: 0,
              zIndex: 2,
            }}
          />
        )}
        <InputText
          id={id}
          type={type}
          name={id}
          value={value.toString()}
          onChange={onChange}
          placeholder={placeholder}
          className={`${className} ${error ? 'p-invalid' : ''}`}
          style={{ 
            paddingLeft: icon && iconPosition === "left" ? "2rem" : "1rem",
            paddingRight: icon && iconPosition === "right" ? "2rem" : "1rem",
            ...style 
          }}
          disabled={disabled}
        />
        {icon && iconPosition === "right" && (
          <i
            className={icon}
            style={{
              fontSize: "14px",
              marginRight: "1rem",
              position: "absolute",
              right: 0,
              zIndex: 2,
            }}
          />
        )}
      </div>
      {error && <small className="p-error block mt-1">{error}</small>}
    </div>
  )
}

export default TextField