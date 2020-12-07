import React, { useEffect, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { User } from "../../../types/User";
import Header from "../../common/Header";
import api from "../../../api";
import Loading from "../../common/Loader";
import "./UserDetails.scss";

interface MatchParam {
  id: string;
}

const UserDetails: React.FC<RouteComponentProps<MatchParam>> = (props: RouteComponentProps<MatchParam>) => {
  const [data, setData] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUser = async (userId: number) => {
    let result = await api.get_specific_user(userId);
    setData(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    const userId = props.match.params.id;

    if (userId) {
      getUser(parseInt(userId));
    }
  }, [props.match.params.id]);

  return (
    <div>
      <Header showBack={true} title={"User Details"} />

      {isLoading ? (
        <Loading show={true} />
      ) : (
        <div className="user-details">
          <img alt={"user"} src={data?.avatar} className="user-img" />

          <span className="flex-row-align">
            <p className="user-label">ID: </p>
            <p>{data?.id}</p>
          </span>

          <span className="flex-row-align">
            <p className="user-label">First Name: </p>
            <p>{data?.first_name}</p>
          </span>

          <span className="flex-row-align">
            <p className="user-label">Last Name: </p>
            <p>{data?.last_name}</p>
          </span>

          <span className="flex-row-align">
            <p className="user-label">Email: </p>
            <p>{data?.email}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export default withRouter(UserDetails);
