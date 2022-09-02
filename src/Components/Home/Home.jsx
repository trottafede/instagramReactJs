import React from "react";
import Navbar from "../Navbar/Navbar";

import Feed from "../Feed/Feed";
import Stories from "../Stories/Stories";
import RightNav from "../Right-navbar/RightNav";
import Login from "../Login/Login";

function Home() {
  return (
    <div>
      {/* <Login /> */}

      {/* <Navbar /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-4">
            <Stories />
            <Feed />
          </div>
          <div className="col-lg-4">
            <RightNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
