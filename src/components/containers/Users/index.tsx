import React, { FunctionComponent, useEffect, useState, useCallback } from "react";
import { LOADER_DURATION } from "../../../config/loader";
import Header from "../../common/Header";
import Loading from "../../common/Loader";
import UserList from "./UserList";
import { useDispatch } from "react-redux";
import { userSliceActions } from "../../../store/slices/users";
import Axios from "axios";
import { USERS_BASE_URL } from "../../../config/api";

export const Users: FunctionComponent = () => {
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const defaultLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);
  };

  const getPaginatedUser = useCallback(
    (page: number) => {
      Axios.get(`${USERS_BASE_URL}?page=${page}`).then((res) => {
        dispatch(userSliceActions.append(res.data.data));
        setCurrPage(page);
      });
    },
    [dispatch]
  );

  useEffect(() => {
    defaultLoader();
    getPaginatedUser(1);
  }, [getPaginatedUser]);

  return (
    <React.Fragment>
      <Header title={"Users"} />

      <div className={"users-list"}>{isLoading ? <Loading show={true} /> : <UserList />}</div>
    </React.Fragment>
  );
};

export default Users;
