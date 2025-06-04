import { getUsers } from "@/services/users";
import UserProviderWrapper from "../userProviderWrapper/UserProviderWrapper";


const UsersTable = async ({ searchParams }: { searchParams: string }) => {
  const usersData = await getUsers(searchParams);
  return (
    <UserProviderWrapper users={usersData.users} totalCount={usersData.totalCount} />
  );
};

export default UsersTable;