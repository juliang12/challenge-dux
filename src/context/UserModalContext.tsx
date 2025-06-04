// context/UserModalContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/interfaces/users.interfaces";

type UserModalContextType = {
  openModal: (user?: User | null) => void;
  closeModal: () => void;
  selectedUser?: User | null;
  isOpen: boolean;
};

const UserModalContext = createContext<UserModalContextType | undefined>(
  undefined
);

export const UserModalProvider = ({ children }: { children: ReactNode }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (user: User | null = null) => {
    if (user) {
      setSelectedUser(user);
    }
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsOpen(false);
  };

  return (
    <UserModalContext.Provider
      value={{ selectedUser, isOpen, openModal, closeModal }}
    >
      {children}
    </UserModalContext.Provider>
  );
};

export const useUserModal = () => {
  const context = useContext(UserModalContext);
  if (!context)
    throw new Error("useUserModal must be used within a UserModalProvider");
  return context;
};
