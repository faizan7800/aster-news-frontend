import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { IosShareOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FacebookShareButton,
  InstapaperShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import {
  Tag,
  FloatButton,
  Row,
  Col,
  Button,
  Avatar,
  Form,
  Tooltip,
} from "antd";
import "./TopStories.css";
import {
  useAddCommentMutation,
  useDislikeNewsMutation,
  useGetAllCommentsQuery,
  useGetLocalNewsByIdQuery,
  useGetNewsByIdQuery,
  useGetUserByIdQuery,
  useLikeNewsMutation,
  useRemoveLikeDislikeMutation,
  useSaveGeoNewsDescMutation,
  useSaveSammaNewsDescMutation,
  useAddNewsToBookmarkMutation,
  useNewsCountMutation,
  useRemoveNewsFromBookmarkMutation,
} from "../../services/nodeApi";
import { format } from "timeago.js";
import {
  LoadingOutlined,
  LikeOutlined,
  DislikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Spin } from "antd";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { Input } from "antd";
const { TextArea } = Input;
const { BackTop } = FloatButton;

const Story = () => {
  const [form] = Form.useForm();
  const [load, setLoad] = useState(false);
  const userId = jwtDecode(Cookies.get("jwt")).id;
  const [addNewsToBookmark] = useAddNewsToBookmarkMutation();
  const [removeNewsFromBookmark] = useRemoveNewsFromBookmarkMutation();
  const [countNews] = useNewsCountMutation();
  const { data: user } = useGetUserByIdQuery(userId);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const cat = location.pathname.split("/")[3];
  const [addComment] = useAddCommentMutation();
  const [saveSamaNewsDesc] = useSaveSammaNewsDescMutation();
  const [saveGeoNewsDesc] = useSaveGeoNewsDescMutation();
  const [likeNews] = useLikeNewsMutation();
  const [dislike] = useDislikeNewsMutation();
  const [removeLikeDislike] = useRemoveLikeDislikeMutation();
  const { data: comments, isLoading: isCommentsLoading } =
    useGetAllCommentsQuery(id);
  const { data, isLoading } = useGetNewsByIdQuery(
    {
      id,
      cat,
    },
    {
      skip: location.pathname.includes("local"),
    }
  );
  const { data: localNews, isLoading: isLocalLoading } =
    useGetLocalNewsByIdQuery(
      {
        id,
        cat,
      },
      { skip: location.pathname.includes("int") }
    );
  let news;
  if (data) news = data?.news[0];
  else if (localNews) news = localNews.news[0];
  useEffect(() => {
    const saveDesc = async () => {
      if (news?.description === "") {
        setLoad(true);
        if (news?.author === "Geo News")
          await saveGeoNewsDesc({
            cat,
            id,
          });
        else if (news?.author === "Samma News")
          await saveSamaNewsDesc({
            cat,
            id,
          });
      }
      setLoad(false);
    };
    saveDesc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localNews]);
  if (isLoading || isLocalLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "50vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
      </div>
    );
  return (
    <>
      <div className="bold fs-28">{news?.title}</div>
      <div
        className="mt-rem-1"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Tag color="#2F9FF8">{news?.category}</Tag>
        {user?.data?.bookmark?.includes(id) ? (
          <Tooltip title="Remove from bookmark">
            <span
              onClick={async () => {
                await removeNewsFromBookmark({ newsId: id });
                if (!location.pathname.includes("bookmarkedNews"))
                  window.location.reload();
                if (location.pathname.includes("bookmarkedNews"))
                  navigate("/dashboard/bookmarkedNews");
              }}
            >
              <BookmarkIcon sx={{ cursor: "pointer" }} />
            </span>
          </Tooltip>
        ) : (
          <Tooltip title="Add to bookmark">
            <span
              onClick={async () => {
                await addNewsToBookmark({ newsId: id });
                window.location.reload();
              }}
            >
              <BookmarkBorderIcon sx={{ cursor: "pointer" }} />
            </span>
          </Tooltip>
        )}
      </div>
      <div className="mt-rem-1">
        <img src={news?.urlToImage} alt="" className="w-86" />
      </div>
      <div className="featured__icons">
        <div className="mt-rem-1">
          {news?.likes.length ? news.likes.length : ""}
          <span style={{ marginRight: "1rem", fontSize: "1.5rem" }}>
            {news?.likes.includes(userId) ? (
              <LikeFilled
                onClick={async () => {
                  await removeLikeDislike({
                    id: news._id,
                  });
                }}
              />
            ) : (
              <LikeOutlined
                onClick={async () => {
                  await likeNews({
                    id: news._id,
                  });
                }}
              />
            )}
          </span>
          {news?.dislikes.length ? news.dislikes.length : ""}
          <span style={{ fontSize: "1.5rem" }}>
            {news?.dislikes.includes(userId) ? (
              <DislikeFilled
                onClick={async () => {
                  await removeLikeDislike({
                    id: news._id,
                  });
                }}
              />
            ) : (
              <DislikeOutlined
                onClick={async () => {
                  await dislike({
                    id: news._id,
                  });
                }}
              />
            )}
          </span>
        </div>
        <div
          style={{
            marginRight: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <strong>You can share it on: &nbsp;</strong>
          <FacebookShareButton url={news?.url} hashtag={news?.category}>
            <FacebookIcon fontSize="medium" />
          </FacebookShareButton>
          <WhatsappShareButton url={news?.url} hashtag={news?.category}>
            <WhatsAppIcon fontSize="medium" />
          </WhatsappShareButton>
          <InstapaperShareButton url={news?.url} hashtag={news?.category}>
            <InstagramIcon fontSize="medium" />
          </InstapaperShareButton>
          <TwitterShareButton url={news?.url} hashtag={news?.category}>
            <TwitterIcon fontSize="medium" />
          </TwitterShareButton>
        </div>
      </div>
      {load ? (
        <div style={{ marginTop: "10vh", marginLeft: "50vh" }}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
        </div>
      ) : (
        <div className="mt-rem-1 fs-17 text-muted w-86">
          {news?.description}
        </div>
      )}
      <br />

      <div className="mt-rem-1 fs-12 text-center w-86">
        <div className="text-muted">Published {format(news?.publishedAt)}</div>
        <div className="p-5">by {news?.author}</div>
      </div>
      <div className="mt-rem-2">
        <BackTop>
          <div className="fs-12">Back to top</div>
        </BackTop>
      </div>
      <Row className="mt-rem-2 bold">
        <Col xs={4} className="fs-17">
          Add your comment
        </Col>
        <Col xs={17} style={{ marginTop: "2px" }} className="text-muted">
          <hr />
        </Col>
      </Row>
      <br />
      <Form
        form={form}
        onFinish={async (values) => {
          await addComment({
            text: values.comment,
            author: userId,
            id: news._id,
          });
          form.resetFields();
        }}
      >
        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: "Please input your comment!",
            },
          ]}
        >
          <TextArea style={{ width: "87.5%" }} />
        </Form.Item>
        <div>
          <Button htmlType="submit" type="primary">
            Add comment
          </Button>
        </div>
      </Form>
      <div className="mt-rem-2">All Comments</div>
      {!isCommentsLoading &&
        comments?.comments.map((comment) => (
          <div className="mt-rem-2" key={comment._id}>
            <span style={{ paddingRight: "0.8rem" }}>
              <Avatar />
            </span>
            <span>{comment.author.email.split("@")[0]}&nbsp; &nbsp;</span>
            <small> {format(comment.createdAt)}</small>
            <div style={{ marginLeft: "3rem" }}>{comment.text}</div>
            <div>
              <Button style={{ border: "none", background: "none" }}>
                reply
              </Button>
            </div>
          </div>
        ))}
    </>
  );
};

export default Story;
