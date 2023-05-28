import React from "react";
import { useGetLocalNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function LocalShowBiz(toggleMode = { toggleMode }) {
  const { data, isLoading } = useGetLocalNewsByCategoryQuery("showbiz");
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
          msg="Local Showbizz News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
