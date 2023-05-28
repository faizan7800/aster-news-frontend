import React from "react";
import { useGetLocalNewsByCategoryQuery } from "../../services/nodeApi";
import TopStories from "../Top Stories/TopStories";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

//  const parseDate = (date) => {
//     const months = {
//       "جنوری": 1,
//       "فروری":2,
//       "مارچ": 3,
//       "اپریل":4,
//       "مئ":5,
//       "جون":6,
//       "جولائی":7,
//       "اگست":8,
//       "ستمبر":9,
//       "اکتوبر":10,
//       "نومبر":11,
//       "دسمبر":12,
//     };
//     const dateParts = date.split(' ');
//     const year = dateParts[2];
//     const month = months[dateParts[1]];
//     const day = dateParts[0];
//     const dateObj = new Date(year, month, day);
//     return dateObj
//   };

export default function LocalHealth({ toggleMode }) {
  const { data, isLoading } = useGetLocalNewsByCategoryQuery("health");
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
          msg="Local Health News"
          toggleMode={toggleMode}
        />
      )}
    </>
  );
}
