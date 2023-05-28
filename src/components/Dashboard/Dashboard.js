import React from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { IconButton } from "@mui/material";
import WbSunnyTwoToneIcon from "@mui/icons-material/WbSunnyTwoTone";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Dashboard = ({ load, setLoad, toggleMode, handleToggleMode }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          margin: "0px auto",
          background: `${toggleMode ? "#2C3333" : ""}`,
          transition: `all 0.5s`,
        }}
      >
        <div
          style={{
            width: "40px",
            margin: "0px auto",
          }}
        >
          {toggleMode ? (
            <div className="lg" onClick={handleToggleMode}>
              <IconButton>
                {" "}
                <WbSunnyTwoToneIcon
                  className="lg-icon"
                  fontSize="small"
                  style={{ color: "#CBE4DE", transition: "all 0.5s" }}
                />
              </IconButton>
            </div>
          ) : (
            <div className="bj" onClick={handleToggleMode}>
              <IconButton>
                <DarkModeIcon className="bj-icon" fontSize="small" />
              </IconButton>
            </div>
          )}
        </div>
      </div>
      <Navbar toggleMode={toggleMode} />
      <Sidebar toggleMode={toggleMode} />
    </>
  );
};

export default Dashboard;
