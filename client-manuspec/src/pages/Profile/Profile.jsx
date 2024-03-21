import React from "react";
import "./Profile.scss";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <div className="profile__image"></div>
          <p className="profile__name">Ian Pinili</p>
        </div>
        <div className="profile__middle"></div>
        <div className="profile__right"></div>
      </div>
    </>
  );
}

export default Profile;
