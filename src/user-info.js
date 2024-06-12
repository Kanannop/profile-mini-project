import React, { useState } from "react";
import { Controller } from "react-hook-form";

function Userinfo({ control, defaultValues }) {
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
          <div
            className="cover-banner"
            style={{
              backgroundImage: coverImage ? `url(${coverImage})` : "none",
            }}
          >
            {coverImage ? null : ""}
            <div className="user-img-frame">
              <div className="user-img">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="profile-image"
                  />
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
                <button
                  className="change-img"
                  onClick={() =>
                    document.getElementById("profileImageInput").click()
                  }
                >
                  O
                </button>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              id="coverImageInput"
              onChange={handleCoverImageChange}
              style={{ display: "none" }}
            />
            <button
              className="change-cover"
              onClick={() => document.getElementById("coverImageInput").click()}
            >
              Change Cover
            </button>
          </div>
          <div className="form-info-pad">
            <div className="user-info-form">
              <div className="input-form">
                <div>Username</div>
                <Controller
                  name="username"
                  control={control}
                  defaultValue={defaultValues.information.username || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-form">
                <div>Nickname</div>
                <Controller
                  name="nickname"
                  control={control}
                  defaultValue={defaultValues.information.nickname || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-form">
                <div>First name</div>
                <Controller
                  name="firstname"
                  control={control}
                  defaultValue={defaultValues.information.firstname || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-form">
                <div>Last name</div>
                <Controller
                  name="lastname"
                  control={control}
                  defaultValue={defaultValues.information.lastname || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-address">
                <div className="input-label">Position</div>
                <Controller
                  name="positionOption"
                  control={control}
                  defaultValue={defaultValues.information.positionOption || ""}
                  render={({ field }) => (
                    <select {...field} className="full">
                      <option value=""></option>
                      <option value="Position 1">Position 1</option>
                      <option value="Position 2">Position 2</option>
                      <option value="Position 3">Position 3</option>
                    </select>
                  )}
                />
              </div>
              <div className="input-form">
                <div>Nationality</div>
                <Controller
                  name="nationality"
                  control={control}
                  defaultValue={defaultValues.information.nationality || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-form">
                <div>Telephone number</div>
                <Controller
                  name="telephoneNumber"
                  control={control}
                  defaultValue={defaultValues.information.telephoneNumber || ""}
                  render={({ field }) => <input {...field} />}
                />
              </div>
              <div className="input-form">
                <div>Starting date</div>
                <Controller
                  name="startingDate"
                  control={control}
                  defaultValue={defaultValues.information.startingDate || ""}
                  render={({ field }) => (
                    <input {...field} className="full" type="date" />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
