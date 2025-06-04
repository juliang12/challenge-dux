"use client";

import { Menubar } from "primereact/menubar";
import React from "react";
import "./NavMenu.css";
import { Button } from "primereact/button";
import Logo from "@/assets/navbar/Logo";

const NavMenu = () => {
  return (
    <Menubar
      start={Logo}
      end={
        <Button
          className="bg-transparent border-none border-noround "
          icon="pi pi-cog"
        />
      }
    />
  );
};

export default NavMenu;
