import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function HeaderOption({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <img
          className="headerOption__avatar"
          src={user?.photoUrl}
          alt="avatar"
        />
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
