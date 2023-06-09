import React, { useState, useEffect } from "react";
import { Row, Col, Button, Input, Dropdown } from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ArrowDownSvg from "./../../images/arrowdown.svg";
import UserSvg from "./../../images/user.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useGetUserByIdQuery } from "../../services/nodeApi";

const Navbar = ({ toggleMode }) => {
  const navigate = useNavigate();

  const userId = jwtDecode(Cookies.get("jwt")).id;
  const { data } = useGetUserByIdQuery(userId);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 20) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  const userSignOut = () => {
    Cookies.set("jwt", "");
    navigate("/login");
  };
  const userProfile = () => {
    navigate("/dashboard/about");
  };
  window.addEventListener("scroll", changeNavbarColor);
  const items = [
    {
      key: "1",
      label: <span onClick={userProfile}>User Profile</span>,
    },
    {
      key: "2",
      label: <span onClick={userSignOut}>Logout</span>,
    },
  ];

  return (
    <>
      <div
        className="nav_fixed"
        style={{
          background: `${toggleMode ? "#2C3333" : ""}`,
          transition: `all 0.5s`,
          color: `${toggleMode ? "#CBE4DE" : ""}`,
        }}
      >
        <Row
          className="vertical-center"
          style={{
            paddingInline: "3rem",
            paddingBlock: "1.1rem",
          }}
        >
          <Col xs={4}>
            <div>
              <img src="/assets/logo.png" alt="" />
              <span
                className="bold fs-18"
                style={{
                  paddingLeft: "15px",
                  color: "#0768B5",
                }}
              >
                {" "}
              </span>
            </div>
          </Col>
          <Col xs={8}></Col>
          <Col xs={4}></Col>
          <Col xs={3}></Col>
          <Col xs={5}>
            <div className="right">
              <Dropdown
                trigger="click"
                menu={{
                  items,
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ paddingRight: ".5rem" }}>
                      <img
                        src={UserSvg}
                        alt=""
                        style={{
                          filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                        }}
                      />
                    </span>
                    <span className="fs-15">
                      {data?.data.email ? data.data.email : "Guest User"}
                    </span>
                  </span>
                  <span style={{ paddingLeft: "1.2rem" }}>
                    <img src={ArrowDownSvg} alt="" />
                  </span>
                </div>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
