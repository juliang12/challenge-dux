import { UserProvider } from "@/context/UserContext";
import React from "react";
import Table from "../table/Table";
import { getUsers } from "@/services/users";

const UsersTable = async ({ searchParams }: { searchParams: string }) => {
  const usersData = await getUsers(searchParams);
  return (
    <UserProvider users={usersData.users} totalCount={usersData.totalCount}>
      <Table />
    </UserProvider>
  );
};

export default UsersTable;
