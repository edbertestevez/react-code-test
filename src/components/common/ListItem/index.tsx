import React from "react";
import "./ListItem.scss";

interface IListItemProps {
  id: number | string;
  avatar: string;
  title: string;
}

const ListItem: React.FC<IListItemProps> = ({ id, avatar, title }) => {
  return (
    <div key={id} className="list-row">
      <img className="row-image" alt={title} src={avatar} />
      <h3>{title}</h3>
    </div>
  );
};

export default ListItem;
