import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DomainIcon from "@mui/icons-material/Domain";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser); // pull user from dL - here it's null (initial value)

  const logOutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="header">
      {/* header left */}
      <div className="header__left">
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="headerLogo"
        />
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* header right */}
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Business" />
        <HeaderOption Icon={ChatIcon} title="Chat" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption onClick={logOutOfApp} avatar={true} title="me" />
        <HeaderOption Icon={DomainIcon} title="For Business" />
        <HeaderOption Icon={NotificationsIcon} title="Advertise" />
      </div>
    </div>
  );
}

export default Header;
