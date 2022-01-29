import * as React from "react";
import "./MenuCard.less";
import { useState } from "react";

interface MenuCardProps {
  image?: string;
  name?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ image, name }) => {
  return (
    <div className="MenuCard">
      <img className="MenuCard__Image" src={image} />
      <div className="MenuCard__Description">
        <div className="MenuCard__Name">{name}</div>
      </div>
    </div>
  );
};
