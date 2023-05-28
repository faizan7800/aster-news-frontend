import React from "react";
import { useGetBookmarkedNewsQuery } from "../../services/nodeApi";
import { LoadingOutlined } from "@ant-design/icons";
import TopStories from "../Top Stories/TopStories";
import { Spin } from "antd";

export default function BookmarkedNews({ toggleMode }) {
  const { data, isLoading } = useGetBookmarkedNewsQuery();
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "50vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
      </div>
    );
  if (!data?.news?.length)
    return (
      <>
        <h1
          style={{
            color: "#47A9F8",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "200px",
          }}
        >
          No news in your bookmarks!
        </h1>
      </>
    );
  return (
    <>
      {data && (
        <TopStories
          articles={data.news}
          msg="Bookmarked News"
          size="large"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
