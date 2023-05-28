import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Sports({ toggleMode }) {
  const location = useLocation();
  const [news, setNews] = useState(null);
  const category = location.pathname.split("/")[3];
  const { data, isLoading } = useGetNewsByCategoryQuery(category);
  useEffect(() => {
    data && setNews(data.news);
  }, [data]);
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "50vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
      </div>
    );
  if (!news?.length) return <>No news for today!</>;
  return (
    <>
      {news && (
        <TopStories articles={news} msg="Sports News" toggleMode={toggleMode} />
      )}
    </>
  );
}
