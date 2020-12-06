import React from "react";
import "./ListItem.scss";

interface IListItemProps {
  avatar: string;
  title: string;
}

const ListItem: React.FC<IListItemProps> = ({ avatar, title }) => {
  return (
    <div className="list-row">
      <img className="row-image" alt={title} src={"https://reqres.in/img/faces/9-image.jpg"} />
      <h3>Michael Angelo</h3>
    </div>
  );
};

export default ListItem;
