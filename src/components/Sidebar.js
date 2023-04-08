import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser); // pull user from dL - here it's null (initial value)

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__backgroundImage"
          src="https://media.licdn.com/dms/image/D4D16AQG9hq-_cIpOiQ/profile-displaybackgroundimage-shrink_350_1400/0/1666987124040?e=1685577600&v=beta&t=tzq-PI556ob5Y_IDtbCM6NP66FPOATjLP80-GRGmFoo"
          alt="backgroundImage"
        />
        <img className="sidebar__avatar" src={user?.photoUrl} alt="me" />
        <h3 className="sidebar__name">{user?.displayName}</h3>
        <p className="sidebar__description">
          Senior Strategist at Publicis Groupe for Abu Dhabi's Dept. of Culture
          & Tourism — Software Engineer specialized in Full Stack Web & Mobile
          App Dev.
        </p>

        {/* Viewed Profile */}
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed your profile </p>
            <span>2,929</span>
          </div>
          <div className="sidebar__stat">
            <p>Views of your post</p>
            <span>4,790</span>
          </div>
        </div>

        {/* Items */}
        <div className="sidebar__premium">
          <p>Access exclusive tools & insights</p>
          <p>Reactivate Premium: 50% Off</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("uxui")}
      </div>
    </div>
  );
}

export default Sidebar;
