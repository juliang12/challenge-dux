"use client";

import { UserProvider } from "@/context/UserContext";
import Table from "../table/Table";
import { User } from "@/interfaces/users.interfaces";

type Props = {
  users: User[];
  totalCount: number;
};

export default function UserProviderWrapper({ users, totalCount }: Props) {
  return (
    <UserProvider users={users} totalCount={totalCount}>
      <Table />
    </UserProvider>
  );
}
