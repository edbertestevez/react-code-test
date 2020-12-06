import React from "react";
import { User } from "../../../types/User";
import ListItem from "../../common/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const UserList: React.FC = () => {
  const users: Array<User> = useSelector((state: RootState) => state.users.list);

  return (
    <div>
      {users.map((row) => {
        return <ListItem id={row.id} title={`${row.first_name} ${row.last_name}`} avatar={row.avatar} />;
      })}
    </div>
  );
};

export default UserList;
