import React from "react";
import Navbar from "../Navbar/Navbar";

import Feed from "../Feed/Feed";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
            <Feed />
          </div>
          <div className="col-lg-4">:V</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
