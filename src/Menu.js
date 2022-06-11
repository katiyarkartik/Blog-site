import React from "react";
import logo from "./logo.png";
import "./Menu.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import InvertColorsRoundedIcon from "@mui/icons-material/InvertColorsRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";
const Menu = () => {
  function changecolor() {
    <style></style>;
  }
  return (
    <div className="menu">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="menu-list">
        <ul className="list-ul">
          <li className="list-li">
            <div className="item">
              <HomeRoundedIcon />
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <AddBoxIcon />
              <Link to="/create">
                <button>Add Blog</button>
              </Link>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <SettingsRoundedIcon className="settings" />
              <Link to="/settings">
                <button>Settings</button>
              </Link>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <BookmarkRoundedIcon />
              <button>Saved</button>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <BarChartRoundedIcon />
              <button>Profile analytics</button>
            </div>
          </li>

          <li className="list-li">
            <div className="item">
              <AccountCircleRoundedIcon />
              <button>Account</button>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <LogoutRoundedIcon />
              <button>Logout</button>
            </div>
          </li>
          <li className="list-li">
            <div className="item">
              <ContactSupportRoundedIcon />
              <button>Support</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
