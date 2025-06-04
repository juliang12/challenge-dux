import { Button } from "primereact/button";
import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        width: 65,
        background: "#2c3e50",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 16,
        gap: 14,
      }}
    >
      <Button
        className="bg-transparent border-none text-white p-0"
        icon="pi pi-home"
      />
      <Button
        className="bg-transparent border-none text-white p-0"
        icon="pi pi-user"
      />
      <Button
        className="bg-transparent border-none text-white p-0"
        icon="pi pi-cog"
      />
      <Button
        className="bg-transparent border-none text-white p-0"
        icon="pi pi-bell"
      />
      <Button
        className="bg-transparent border-none text-white p-0" 
        icon="pi pi-sign-out"
      />
    </div>
  );
};

export default Sidebar;
