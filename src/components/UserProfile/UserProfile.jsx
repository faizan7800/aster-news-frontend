import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { useGetUserByIdQuery } from "../../services/nodeApi";
const UserProfile = () => {
  const userId = jwtDecode(Cookies.get("jwt")).id;
  const { data } = useGetUserByIdQuery(userId);

  return (
    <div>
      <h1>This is About Yourself!</h1>
      <div>
        {/* <div className="flex" style={{ alignItems: "center" }}>
          <p>
            {" "}
            <strong>Your Name: </strong>{" "}
          </p>{" "}
          <p>Muhammad Faizan</p>
        </div> */}
        <div className="flex" style={{ alignItems: "center" }}>
          <p>
            {" "}
            <strong>Your Email: </strong>{" "}
          </p>{" "}
          <p>{data?.data.email}</p>
        </div>
        <div className="flex" style={{ alignItems: "center" }}>
          <p>
            {" "}
            <strong> # Of Bookmarked News: </strong>
          </p>{" "}
          <p>{data?.data.bookmark.length}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
