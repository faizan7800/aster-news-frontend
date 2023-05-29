import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Card, Button, Collapse, Input, Row, Col, Carousel, Form } from "antd";
import "./Dashboard.css";
import WorldSvg from "./../../images/world.svg";
import BriefcaseSvg from "./../../images/briefcase.svg";
import MessageSvg from "./../../images/message.svg";
import BellSvg from "./../../images/bell.svg";
import SettingSvg from "./../../images/setting.svg";
import AimSvg from "./../../images/aim.svg";
import SunSvg from "./../../images/sun.svg";
import FeatherSvg from "./../../images/feather.svg";
import TextFileSvg from "./../../images/textFile.svg";
import ArrowLeftSvg from "./../../images/arrowleft.svg";
import ArrowRightSvg from "./../../images/arrowright.svg";

const { Panel } = Collapse;

const Sidebar = ({ toggleMode }) => {
  const location = useLocation();
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div
        className="main"
        style={{
          background: `${toggleMode ? "#2C3333" : ""}`,
          transition: `all 0.5s`,
          color: `${toggleMode ? "#CBE4DE" : ""}`,
        }}
      >
        <div className="left-bar">
          <div className="left-content">
            <ul>
              <li
                className={`item ${
                  location.pathname.endsWith("topstories/general")
                    ? "side_active"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard/topstories/general"
                  style={{ textDecoration: "none" }}
                  className={`text-black ${
                    location.pathname.endsWith("topstories")
                      ? "side_activee"
                      : ""
                  }`}
                >
                  <img
                    src={WorldSvg}
                    alt=""
                    style={{
                      width: "18px",
                      filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                    }}
                  />
                  <span
                    style={{
                      paddingLeft: "10px",
                      transition: `all 0.5s`,
                      color: `${toggleMode ? "#CBE4DE" : ""}`,
                    }}
                  >
                    Top Stories
                  </span>
                </Link>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith("country") ? "side_active" : ""
                }`}
              >
                <Collapse ghost expandIconPosition="end">
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=""
                          style={{
                            width: "18px",
                            filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                          }}
                        />
                        <span
                          style={{
                            paddingLeft: "10px",
                            transition: `all 0.5s`,
                            color: `${toggleMode ? "#CBE4DE" : ""}`,
                          }}
                        >
                          Around the World
                        </span>
                      </>
                    }
                    key="1"
                  >
                    <ul className="fs-15" style={{ lineHeight: "1.3rem" }}>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("country/us")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/country/us"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("country/us")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            USA
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("country/gb")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/country/gb"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("country/gb")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            UK
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("country/ca")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/country/ca"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("country/ca")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Canada
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("country/au")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/country/au"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("country/au")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Australia
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>
              <li
                className={`item ${
                  location.pathname.endsWith("localnews") ? "side_active" : ""
                }`}
              >
                <Collapse ghost expandIconPosition="end">
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=""
                          style={{
                            width: "18px",
                            filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                          }}
                        />
                        <span
                          style={{
                            paddingLeft: "10px",
                            transition: `all 0.5s`,
                            color: `${toggleMode ? "#CBE4DE" : ""}`,
                          }}
                        >
                          Local News
                        </span>
                      </>
                    }
                    key="1"
                  >
                    <ul className="fs-15" style={{ lineHeight: "1.3rem" }}>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/health")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/health"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/health")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Health
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/sports")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/sports"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/sports")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Sports
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/entertainment")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/entertainment"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/entertainment")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Entertainment
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/business")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/business"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/business")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Business
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/showbiz")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/showbiz"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/showbiz")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Showbiz
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.includes("local/technology")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/local/technology"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.includes("local/technology")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Technology
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith("users") ? "side_active" : ""
                }`}
              >
                <Collapse ghost expandIconPosition="end">
                  <Panel
                    header={
                      <>
                        <img
                          src={BriefcaseSvg}
                          alt=""
                          style={{
                            width: "18px",
                            filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                          }}
                        />
                        <span
                          style={{
                            paddingLeft: "10px",
                            transition: `all 0.5s`,
                            color: `${toggleMode ? "#CBE4DE" : ""}`,
                          }}
                        >
                          International News
                        </span>
                      </>
                    }
                    key="1"
                  >
                    <ul className="fs-15" style={{ lineHeight: "1.3rem" }}>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/health")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/health"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/health")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Health
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/business")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/business"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/business")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Business
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/sports")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/sports"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/sports")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Sports
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/entertainment")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/entertainment"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/entertainment")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Entertainment
                          </span>
                        </Link>
                      </li>

                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/general")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/general"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/general")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            General
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/science")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/science"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/science")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Science
                          </span>
                        </Link>
                      </li>
                      <li
                        className={`nested_item ${
                          location.pathname.endsWith("int/technology")
                            ? "side_active"
                            : ""
                        }`}
                      >
                        <Link
                          to="/dashboard/int/technology"
                          style={{ textDecoration: "none" }}
                          className={`text-black ${
                            location.pathname.endsWith("int/technology")
                              ? "side_activee"
                              : ""
                          }`}
                        >
                          <img
                            src={WorldSvg}
                            alt=""
                            style={{
                              width: "18px",
                              filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                            }}
                          />
                          <span
                            style={{
                              paddingLeft: "10px",
                              color: `${toggleMode ? "#CBE4DE" : ""}`,
                            }}
                          >
                            Technology
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </Panel>
                </Collapse>
              </li>

              <li
                className={`item ${
                  location.pathname.endsWith("bookmarkedNews")
                    ? "side_active"
                    : ""
                }`}
              >
                <Link
                  to="/dashboard/bookmarkedNews"
                  style={{ textDecoration: "none" }}
                  className={`text-black ${
                    location.pathname.endsWith("bookmarkedNews")
                      ? "side_activee"
                      : ""
                  }`}
                >
                  <img
                    src={MessageSvg}
                    alt=""
                    style={{
                      width: "18px",
                      filter: `${toggleMode ? "grayscale(100%)" : ""}`,
                    }}
                  />
                  <span
                    style={{
                      paddingLeft: "10px",
                      transition: `all 0.5s`,
                      color: `${toggleMode ? "#CBE4DE" : ""}`,
                    }}
                  >
                    Bookmarked News
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
