import React from "react";

function Userinfo() {
  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Information</div>
        <div className="user-info-card flex-row">
          <div className="cover-banner">
            <div className="user-img">
              <div className="change-img">O</div>
            </div>
            <div className="change-cover">
                Change Cover
            </div>
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
              <div className="input-form">
                <div>Position</div>
                <input></input>
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
                <input></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinfo;
