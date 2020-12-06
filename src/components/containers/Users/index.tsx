import React, { FunctionComponent, useEffect, useState } from "react";
import { LOADER_DURATION } from "../../../config/loader";
import Header from "../../common/Header";
import Loading from "../../common/Loader";
import UserList from "./UserList";
import { useDispatch } from "react-redux";

export const Users: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    defaultLoader();
  }, [dispatch]);

  const defaultLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);
  };

  return (
    <React.Fragment>
      <Header title={"Users"} />

      <div className={"users-list"}>{isLoading ? <Loading show={true} /> : <UserList />}</div>
    </React.Fragment>
  );
};

export default Users;
