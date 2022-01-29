import * as React from "react";
import "./Card.less";

interface CardProps {
  icon: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ icon, text }) => {
  return (
    <div className="Card">
      <img className="Card__Icon" src={icon} />
      <div className="Card__Text">{text}</div>
    </div>
  );
};
