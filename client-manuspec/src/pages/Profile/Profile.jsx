import React from "react";
import "./Profile.scss";
import ProfileList from "../../components/ProfileList/ProfileList";

function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profile__left">
          <div className="profile__image"></div>
          <p className="profile__name">Ian Pinili</p>
        </div>
        <div className="profile__middle">
          <p className="profile__num">778-855-3645</p>
          <p className="profile__email">gianpinili@gmail.com</p>
        </div>
        <div className="profile__right">
          <p className="profile__number">Tech #: 11975</p>
          <p className="profile__job">Automotive Technician</p>
        </div>
      </div>
      <ProfileList />
    </>
  );
}

export default Profile;
