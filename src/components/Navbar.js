import React from "react";
import "./Navbar.css";

import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Searchbar from "./Searchbar";

export default function Navbar() {
  const handleTurnedInNotClick = () => {
    console.log("TurnedInNotIcon clicked");
  };

  const handleNotificationsClick = () => {
    console.log("NotificationsNoneIcon clicked");
  };

  const handleAccountClick = () => {
    console.log("AccountCircleIcon clicked");
  };

  return (
    <div className="contenitore">
      <div className="partelogo">
        <img src="./assets/logo.png" alt="logo" />
        <p className="titolo">smanettony.</p>
      </div>
      <div className="partecentrale">
        <Searchbar />
      </div>
      <div className="partedestra">
        <button onClick={handleTurnedInNotClick} className="transparent-button">
          <TurnedInNotIcon />
        </button>
        <button onClick={handleNotificationsClick} className="transparent-button">
          <NotificationsNoneIcon />
        </button>
        <button onClick={handleAccountClick} className="transparent-button">
          <div className="account">
            <AccountCircleIcon />
            <p>Account</p>
          </div>
        </button>
      </div>
    </div>
  );
}
