import React, { FunctionComponent } from "react";
import Header from "../../common/Header";
import Loading from "../../common/Loader";

export const Users: FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header title={"Users"} />

      <div className={"users-list"}>
        <Loading show={true} />
      </div>
    </React.Fragment>
  );
};

export default Users;
