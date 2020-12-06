import React from "react";
import { User } from "../../../types/User";
import ListItem from "../../common/ListItem";

type UserListProps = {
  users: Array<User>;
};

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((row) => {
        return <ListItem title={`${row.first_name} ${row.last_name}`} avatar={row.avatar} />;
      })}
    </div>
  );
};

export default UserList;
