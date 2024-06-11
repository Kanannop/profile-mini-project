import React, { useState } from "react";

function Userinfo() {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleProfileImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleCoverImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setCoverImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Information</div>
        <div className="user-info-card flex-column">
          <div className="cover-banner" style={{ backgroundImage: coverImage ? `url(${coverImage})` : "none" }}>
            {coverImage ? null : ""}
            <div className="user-img">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                ""
              )}
              <input
                type="file"
                accept="image/*"
                id="profileImageInput"
                onChange={handleProfileImageChange}
                style={{ display: "none" }}
              />
              <button className="change-img" onClick={() => document.getElementById('profileImageInput').click()}>O</button>
            </div>
            <input
              type="file"
              accept="image/*"
              id="coverImageInput"
              onChange={handleCoverImageChange}
              style={{ display: "none" }}
            />
            <button className="change-cover" onClick={() => document.getElementById('coverImageInput').click()}>Change Cover</button>
          </div>
          <div className="form-info-pad">
            <div className="user-info-form">
              <div className="input-form">
                <div>Username</div>
                <input></input>
              </div>
              <div className="input-form">
                <div>Nickname</div>
                <input></input>
              </div>
              <div className="input-form">
                <div>First name</div>
                <input></input>
              </div>
              <div className="input-form">
                <div>Last name</div>
                <input></input>
              </div>
              <div className="input-address">
                <div className="input-label">Position</div>
                <select className="full">
                  <option value="district"></option>
                  <option value="district1">Position 1</option>
                  <option value="district2">Position 2</option>
                  <option value="district3">Position 3</option>
                </select>
              </div>
              <div className="input-form">
                <div>Nationality</div>
                <input></input>
              </div>
              <div className="input-form">
                <div>Telephone number</div>
                <input></input>
              </div>
              <div className="input-form">
                <div>Starting date</div>
                <input className="full" type="date"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
