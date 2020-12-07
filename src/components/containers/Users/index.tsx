import React, { FunctionComponent, useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { LOADER_DURATION } from "../../../config/loader";
import { userSliceActions } from "../../../store/slices/users";
import { isScreenBottomReached } from "../../../utils";
import debounce from "lodash/debounce";

import Header from "../../common/Header";
import Loading from "../../common/Loader";
import UserList from "./UserList";
import api from "../../../api";
import "../../../styles/list.scss";

export const Users: FunctionComponent = () => {
  const [currPage, setCurrPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isEndReached, setIsEndReached] = useState(false);
  const dispatch = useDispatch();

  //Initial Loader
  const defaultLoader = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, LOADER_DURATION);
  };

  //Pagination
  const getPaginatedUser = useCallback(
    debounce(async (page: number) => {
      let result = await api.get_paginated_users({ page });

      if (result) {
        let { data, total_pages } = result;

        if (page === total_pages) {
          setIsEndReached(true);
        }

        if (page === 1) {
          dispatch(userSliceActions.override(data));
        } else if (page <= total_pages) {
          dispatch(userSliceActions.append(data));
        }

        setCurrPage(page);
      }
    }, 300),
    [dispatch]
  );

  // Bottom Scroll
  const onBottomScroll = useCallback(() => {
    if (isScreenBottomReached() && !isEndReached) {
      getPaginatedUser(currPage + 1);
    }
  }, [currPage, isEndReached, getPaginatedUser]);

  // Scroll Listener
  useEffect(() => {
    window.addEventListener("scroll", onBottomScroll);
    return () => window.removeEventListener("scroll", onBottomScroll);
  }, [onBottomScroll]);

  //Initial Effect
  useEffect(() => {
    defaultLoader();
    getPaginatedUser(1);
  }, [getPaginatedUser]);

  return (
    <React.Fragment>
      <Header title={"Users"} />

      <div className={"users-list"}>{isLoading ? <Loading show={true} /> : <UserList />}</div>

      {isEndReached && <div className="list-end">No more records found</div>}
    </React.Fragment>
  );
};

export default Users;
