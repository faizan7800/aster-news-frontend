import React from "react";
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

  const handleClick = async () => {
    await countNews({
      id: article._id,
    });
    navigate(location.pathname + "/" + article._id);
  };
  return (
    <>
      {size === "large" ? (
        <div>
          <h1>Your Saved News is:</h1>
          <div className="story_card" onClick={handleClick}>
            <Card
              style={{
                width: 914,
              }}
            >
              <div className="space-between">
                <div>
                  <div style={{ fontWeight: 500 }} className="fs-17">
                    {article?.title?.substr(0, 50) + "..."}
                  </div>
                  <div className="text-muted" style={{ width: "90%" }}>
                    {" "}
                    {article?.description
                      ? article.description.substr(0, 80) + "..."
                      : ""}
                  </div>
                  <Row
                    style={{
                      paddingTop: ` 4rem`,
                    }}
                  ></Row>
                </div>
                <div>
                  <img
                    src={article?.urlToImage}
                    alt="..."
                    style={{ width: "170px" }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
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
            <span>
              {article?.newsCount.length ? article.newsCount.length : "0"}
            </span>
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
