import "./RightNav.css";
import React from "react";
import trottafede from "../Feed/trottafede.jpg";

export default function RightNav() {
  return (
    <div id="RightNav">
      <div className="UserInfo">
        <img className="userImg" src={trottafede} alt="user" />
        <div className="innerUserInfo">
          <p>trottafede</p>
          <em>Federico Trotta</em>
        </div>
      </div>

      <div id="Suggestions">
        <p id="SuggestionsParagraph">Suggestions for you</p>
        <div className="SuggestionInfo">
          <img className="userImg" src={trottafede} alt="user" />
          <div className="innerUserInfo">
            <p>trottafede</p>
            <em>Followed by Bill Gates & Elon Musk</em>
          </div>
          <div className="FollowUnfollow">
            <p>Follow</p>
          </div>
        </div>
        <div className="SuggestionInfo">
          <img className="userImg" src={trottafede} alt="user" />
          <div className="innerUserInfo">
            <p>trottafede</p>
            <em>Followed by Bill Gates & Elon Musk</em>
          </div>
          <div className="FollowUnfollow">
            <p>Follow</p>
          </div>
        </div>
        <div className="SuggestionInfo">
          <img className="userImg" src={trottafede} alt="user" />
          <div className="innerUserInfo">
            <p>trottafede</p>
            <em>Followed by Bill Gates & Elon Musk</em>
          </div>
          <div className="FollowUnfollow">
            <p>Follow</p>
          </div>
        </div>
        <div className="SuggestionInfo">
          <img className="userImg" src={trottafede} alt="user" />
          <div className="innerUserInfo">
            <p>trottafede</p>
            <em>Followed by Bill Gates & Elon Musk</em>
          </div>
          <div className="FollowUnfollow">
            <p>Follow</p>
          </div>
        </div>
        <div className="SuggestionInfo">
          <img className="userImg" src={trottafede} alt="user" />
          <div className="innerUserInfo">
            <p>trottafede</p>
            <em>Followed by Bill Gates & Elon Musk</em>
          </div>
          <div className="FollowUnfollow">
            <p>Follow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
