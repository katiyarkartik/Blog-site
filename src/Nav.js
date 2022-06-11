import React from "react";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import "./Home2.css";
import { padding } from "@mui/system";
const Nav = () => {
  return (
    
      <div className="content2 split2">
       
          <div className="navbar">
            <input className="search-bar" placeholder="Search" type="text" />
            <button className="notify">
              <NotificationsNoneOutlinedIcon />
            </button>
            <button className="msg">
              <ChatBubbleOutlineOutlinedIcon />
            </button>
            <button className="user">John Doe</button>
          </div>
        
      </div>
 
  );
};

export default Nav;
