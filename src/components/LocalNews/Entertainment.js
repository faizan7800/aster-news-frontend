import React from "react";
import { useGetLocalNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function LocalEntertainment({ toggleMode }) {
  const { data, isLoading } = useGetLocalNewsByCategoryQuery("entertainment");
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "50vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
      </div>
    );
  if (!data?.news?.length) return <>No news for today!</>;
  return (
    <>
      {data && (
        <TopStories
          articles={data.news}
          msg="Local Entertainment News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
