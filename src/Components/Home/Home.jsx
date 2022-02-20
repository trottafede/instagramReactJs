import React from "react";
import Navbar from "../Navbar/Navbar";

import Feed from "../Feed/Feed";
import Stories from "../Stories/Stories";
import RightNav from "../Right-navbar/RightNav";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
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
