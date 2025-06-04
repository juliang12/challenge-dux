import NewUserButton from "../newUserButton/NewUserButton";

const TopBarUsers = () => {
  return (
    <div className="w-full flex align-items-start pt-4 justify-content-between">
      <h1 className="text-25 font-bold m-0">Usuarios</h1>
      <NewUserButton />
    </div>
  );
};

export default TopBarUsers;
