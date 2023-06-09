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
  else if (country === "ae") countryName = "United Arab Emirates";
  else if (country === "ar") countryName = "Argentina";
  else if (country === "at") countryName = "Austria";
  else if (country === "bg") countryName = "Bulgaria";
  else if (country === "be") countryName = "Belgium";
  else if (country === "ch") countryName = "Switzerland";
  else if (country === "cn") countryName = "China";
  else if (country === "fr") countryName = "France";
  else if (country === "co") countryName = "Colombia";
  else if (country === "cz") countryName = "Czech Republic";
  else if (country === "de") countryName = "Germany";
  else if (country === "eg") countryName = "Egypt";
  else if (country === "gr") countryName = "Greece";
  else if (country === "hk") countryName = "Hong Kong";
  else if (country === "hu") countryName = "Hungary";
  else if (country === "id") countryName = "Indonesia";
  else if (country === "ie") countryName = "Ireland";
  else if (country === "il") countryName = "Israel";
  else if (country === "it") countryName = "Italy";
  else if (country === "in") countryName = "India";
  else if (country === "jp") countryName = "Japan";
  else if (country === "kr") countryName = "South Korea";
  else if (country === "ma") countryName = "Morocco";
  else if (country === "mx") countryName = "Mexico";
  else if (country === "my") countryName = "Malaysia";
  else if (country === "no") countryName = "Norway";
  else if (country === "nz") countryName = "New Zeland";
  else if (country === "pt") countryName = "Portugal";
  else if (country === "ro") countryName = "Romania";
  else if (country === "ru") countryName = "Russia";
  else if (country === "sa") countryName = "Saudi Arabia";
  else if (country === "se") countryName = "Sweden";
  else if (country === "sg") countryName = "Singapore";
  else if (country === "sk") countryName = "Slovakia";
  else if (country === "tr") countryName = "Turkey";
  else if (country === "tw") countryName = "Taiwan";
  else if (country === "ua") countryName = "Ukraine";
  else if (country === "za") countryName = "South Africa";

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
          dropdown="yes"
        />
      )}
    </>
  );
}
