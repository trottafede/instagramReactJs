import "./Stories.css";
import React from "react";

import trottafede from "../Feed/trottafede.jpg";
function Stories() {
  return (
    <div id="Stories">
      <div className="container">
        <div className="row ">
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="Story">
              <img className="userImg" src={trottafede} alt="user" />
              <p>trottafede</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
