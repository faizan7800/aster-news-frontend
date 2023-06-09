import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Card, Row, Col } from "antd";
import "./TopStories.css";
import ShareSvg from "./../../images/share.svg";
import PocketSvg from "./../../images/pocket.svg";
import { format } from "timeago.js";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import axios from "axios";
import "./Card.css";
import {
  useNewsCountMutation,
  useGetLocalNewsByIdQuery,
  useGetNewsByIdQuery,
} from "../../services/nodeApi";
const StoriesCard = ({ size, articleLarge, article, toggleMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [countNews] = useNewsCountMutation();

  const [clickCount, setClickCount] = useState(0);

  const getClickCount = async () => {
    try {
      // Make a GET request to retrieve the click count
      const response = await axios.get(
        `http://localhost:3001/api/v1/news/articles/${article._id}/clicks`
      );
      setClickCount(response.data.clickCount);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Fetch the click count when the component mounts
    getClickCount();
  }, []);

  const handleClick = async () => {
    try {
      // Make a POST request to update the click count
      await axios.post(
        `http://localhost:3001/api/v1/news/articles/${article._id}/clicks`
      );
      // Update the local click count state
      setClickCount(clickCount + 1);
    } catch (error) {
      console.error(error);
    }
    navigate(
      article.category
        ? `/dashboard/${article.category.includes("local") ? "local" : "int"}/${
            article.category.includes("local")
              ? article.category.substring(5)
              : article.category
          }/${article._id}`
        : `/dashboard/country/${article.country}/${article._id}`
    );
  };
  return (
    <>
      {size === "large" ? (
        // <div>
        //   <h1>Your Saved News is:</h1>
        //   <div className="story_card" onClick={handleClick}>
        //     <Card
        //       style={{
        //         width: 914,
        //       }}
        //     >
        //       <div className="space-between">
        //         <div>
        //           <div style={{ fontWeight: 500 }} className="fs-17">
        //             {article?.title?.substr(0, 50) + "..."}
        //           </div>
        //           <div className="text-muted" style={{ width: "90%" }}>
        //             {" "}
        //             {article?.description
        //               ? article.description.substr(0, 80) + "..."
        //               : ""}
        //           </div>
        //           <Row
        //             style={{
        //               paddingTop: ` 4rem`,
        //             }}
        //           ></Row>
        //         </div>
        //         <div>
        //           <img
        //             src={article?.urlToImage}
        //             alt="..."
        //             style={{ width: "170px" }}
        //           />
        //         </div>
        //       </div>
        //     </Card>
        //   </div>
        // </div>
        ""
      ) : (
        <div
          className="story_card crd"
          style={{
            cursor: "pointer",
            margin: "3px",
            background: `${toggleMode ? "#2C3333" : ""}`,
            transition: `all 0.5s`,
          }}
          onClick={handleClick}
        >
          <div className="sv-rd ">
            <a className="readLater" target="_blank">
              Read
            </a>
            <span>{article.clickCount}</span>
          </div>
          <div className="tit-des-img">
            <h4>{article?.title?.substr(0, 50) + "..."}</h4>
            <p>
              {" "}
              {article?.description
                ? article.description.substr(0, 80) + "..."
                : ""}
            </p>
            <img src={article?.urlToImage} alt="error loading" />
          </div>
          <div>
            <small style={{ paddingTop: "5px" }}>
              by <br /> <strong>{article.author}</strong>
            </small>
          </div>
        </div>
        // <div className='story_card' style={{cursor: 'pointer'}} onClick={handleClick}>
        //   <Card
        //     style={{
        //       width: 440,
        //     }}
        //   >
        //     <div className='space-between'>
        //       <div>
        //         <div className='fs-17' style={{ fontWeight: 500 }}>
        //           {article?.title?.substr(0, 50) + '...'}
        //         </div>
        //         <div className='text-muted' style={{ width: '90%' }}>
        //           {article?.description ? article.description.substr(0, 80) + '...' : ''}
        //         </div>
        //       </div>
        //       <div>
        //         <img
        //           src={article?.urlToImage}
        //           alt=''
        //           style={{ width: '160px' }}
        //         />
        //       </div>
        //     </div>
        //     <Row
        //       style={{
        //         paddingTop: '1rem'
        //       }}
        //     >
        //       <Col xs={6}>{article?.source?.name ? article.source.name.substr(0, 10) + '...': article?.src}</Col>
        //       <Col xs={6}>{format(article?.publishedAt)}</Col>
        //       <Col xs={6}>
        //         <span style={{ color: '#0768B5' }}>
        //           <img src={ShareSvg} alt='' />
        //           &nbsp; Share
        //         </span>
        //       </Col>
        //       <Col xs={6}>
        //         <span style={{ color: '#0768B5' }}>
        //           <img src={PocketSvg} alt='' />
        //           &nbsp; Read Later
        //         </span>
        //       </Col>
        //     </Row>
        //   </Card>
        // </div>
      )}
    </>
  );
};

export default StoriesCard;
