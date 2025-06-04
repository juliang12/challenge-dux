"use client";
import { createContext, useContext } from "react";
import { User } from "@/interfaces/users.interfaces";

interface UserContextType {
  users: User[];
  totalCount: number;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  users: User[];
  totalCount: number;
  children: React.ReactNode;
}

export const UserProvider = ({ users, totalCount, children }: UserProviderProps) => {
  return (
    <UserContext.Provider value={{ users, totalCount }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de un UserProvider");
  }
  return context;
};
