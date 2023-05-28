import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetNewsByCountryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Country({ toggleMode }) {
  const location = useLocation();
  const [news, setNews] = useState(null);
  const country = location.pathname.split("/")[3];
  let countryName;
  if (country === "ca") countryName = "Canada";
  else if (country === "gb") countryName = "United Kingdom";
  else if (country === "us") countryName = "America";
  else if (country === "au") countryName = "Ausralia";
  const { data, isLoading } = useGetNewsByCountryQuery(country);
  useEffect(() => {
    data && setNews(data.news);
  }, [data]);
  if (isLoading)
    return (
      <div style={{ marginTop: "30vh", marginLeft: "50vh" }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: "3rem" }} />} />
      </div>
    );
  if (!data?.news?.length) return <>No news for today!</>;
  return (
    <>
      {news && (
        <TopStories
          articles={news}
          msg={countryName + " News"}
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
