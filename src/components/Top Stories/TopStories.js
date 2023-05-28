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
const { CheckableTag } = Tag;

const TopStories = ({ toggleMode, articles, size }) => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
  return (
    <>
      <div
        className="bold fs-20"
        style={{
          transition: `all 0.5s`,
          color: `${toggleMode ? "#CBE4DE" : ""}`,
        }}
      >
        Top Stories for you
      </div>
      <Row>
        <Col xs={18}>
          {articles && (
            <Row style={{ marginTop: "1rem", width: "132%" }}>
              {articles.map((el, i) => {
                return (
                  <div key={i} style={{ marginTop: "1rem", display: "flex" }}>
                    <StoriesCard article={el} toggleMode={toggleMode} />
                  </div>
                );
              })}
            </Row>
          )}
          <div
            className="bold fs-20 space-between"
            style={{ marginBlock: "2rem" }}
          ></div>
        </Col>
      </Row>
    </>
  );
};

export default TopStories;
