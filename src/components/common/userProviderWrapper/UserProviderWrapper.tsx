"use client";

import { UserProvider } from "@/context/UserContext";
import { User } from "@/interfaces/users.interfaces";
import UserTableContainer from "../table/UsersTableContainer";

type Props = {
  users: User[];
  totalCount: number;
};

export default function UserProviderWrapper({ users, totalCount }: Props) {
  return (
    <UserProvider users={users} totalCount={totalCount}>
      <UserTableContainer />
    </UserProvider>
  );
}
