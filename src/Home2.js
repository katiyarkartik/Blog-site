import React from "react";
import "./Home2.css";
import pic from "./pic.jpg";
import SearchIcon from '@mui/icons-material/Search';

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Menu from "./Menu.js";
const Home2 = () => {
  return (
    <div className="page">
      <div className="nav split">
        <Menu />
      </div>
      <div className="content split">
        <div className="body">
          <div className="navbar">
            <input className="search-bar" placeholder="Search" type="text" />
            <button ><SearchIcon/></button>
            <button className="notify">
              <NotificationsNoneOutlinedIcon />
            </button>
            <button className="msg">
              <ChatBubbleOutlineOutlinedIcon />
            </button>
            <button className="user">John Doe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
