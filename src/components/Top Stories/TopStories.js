import React, { useState, useRef } from "react";
import "./TopStories.css";
import { Tag, Row, Col, Carousel } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import FeatherSvg from "./../../images/feather.svg";
import ArrowLeftLineSvg from "./../../images/arrowleftwithline.svg";
import ArrowRightLineSvg from "./../../images/arrowrightwithline.svg";
import ArrowLeftLineDisabledSvg from "./../../images/arrowleftwithlinedisabled.svg";
import ArrowRightLineDisabledSvg from "./../../images/arrowrightwithlinedisabled.svg";
import StoriesCard from "./StoriesCard";
import FollowCard from "./FollowCard";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { CheckableTag } = Tag;

const TopStories = ({ articles, msg, toggleMode }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");

  const onFollowCardChange = (currentSlidee) => {
    setCurrentSlide(currentSlidee);
  };

  const tagsData = [
    "All",
    "Books",
    "Music",
    "Sports",
    "Android",
    "Google",
    "Nano Technology",
  ];
  const [selectedTags, setSelectedTags] = useState(["All"]);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  const filteredArticles = articles?.filter((el) =>
    el.title?.toLowerCase().includes(search)
  );
  const handleSearch = () => {
    console.log(filteredArticles);
  };
  return (
    <>
      <div className="bold fs-20">{msg || "Top Stories for you"}</div>
      <Row>
        <Col xs={18}>
          <div
            className="search_bar"
            style={{ marginTop: "1.5rem", width: "82%" }}
          >
            <Input
              className="border-0"
              style={{
                background: "rgba(47, 159, 248, 0.04)",
                borderRadius: "4px",
                width: "118%",
                height: "46px",
                marginLeft: "20px",
              }}
              placeholder="Search news..."
              size="large"
              onChange={(e) => {
                setSearch(e.target.value);
                console.log(search);
              }}
              suffix={
                <span>
                  <SearchOutlined onClick={handleSearch} />
                </span>
              }
            />
          </div>

          <div style={{ marginTop: "2rem" }}></div>
          {filteredArticles?.length ? (
            <Row style={{ marginTop: "1rem", width: "132%" }}>
              {filteredArticles.map((el, i) => {
                return (
                  <div key={i} style={{ marginTop: "1rem", display: "flex" }}>
                    <StoriesCard article={el} toggleMode={toggleMode} />
                  </div>
                );
              })}
            </Row>
          ) : (
            "No results found"
          )}
        </Col>
      </Row>
    </>
  );
};

export default TopStories;
