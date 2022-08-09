import * as React from "react";
import "./MenuCard.less";
import { useState } from "react";

interface MenuCardProps {
  image?: string;
  name?: string;
  text?: string;
}

export const MenuCard: React.FC<MenuCardProps> = ({ image, name, text }) => {
  return (
    <div className="MenuCard">
      <div className="MenuCard__Menu">
        <img className="MenuCard__Image" src={image} />
        <div className="MenuCard__Description">
          <div className="MenuCard__Name">{name}</div>
        </div>
      </div>
      <div className="MenuCard__Text">{text}</div>
    </div>
  );
};
