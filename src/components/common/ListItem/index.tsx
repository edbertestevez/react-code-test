import React from "react";
import "./ListItem.scss";

interface IListItemProps {
  id: number | string;
  avatar: string;
  title: string;
  onClick?: () => void;
}

const ListItem: React.FC<IListItemProps> = ({ id, avatar, title, onClick }) => {
  return (
    <div key={id} className="list-row" onClick={onClick}>
      <img className="list-row-image" alt={title} src={avatar} />
      <h3 className="list-row-title">{title}</h3>
    </div>
  );
};

export default ListItem;
