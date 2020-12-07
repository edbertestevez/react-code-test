import React from "react";
import { User } from "../../../types/User";
import ListItem from "../../common/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useHistory } from "react-router-dom";
import { AppRoutes } from "../../../config/routes";

const UserList: React.FC = () => {
  const users: Array<User> = useSelector((state: RootState) => state.users.list);
  const history = useHistory();

  return (
    <div>
      {users.map((row) => {
        return <ListItem onClick={() => history.push(`${AppRoutes.USER_ROOT}/${row.id}`)} key={row.id} id={row.id} title={`${row.first_name} ${row.last_name}`} avatar={row.avatar} />;
      })}
    </div>
  );
};

export default UserList;
