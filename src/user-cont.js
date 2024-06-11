import React from "react";

function Usercont() {
  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Contact</div>
        <div className="eighty user-contact-columns">
          <div className="input-address eighty">
            <div className="input-address">Address</div>
            <input className="full"></input>
          </div>
          <div className="input-address">
            <div className="input-label">Subdistrict</div>
            <select className="full">
              <option value="subdistrict"></option>
              <option value="subdistrict1">Subdistrict 1</option>
              <option value="subdistrict2">Subdistrict 2</option>
              <option value="subdistrict3">Subdistrict 3</option>
            </select>
          </div>
          <div className="input-address">
            <div className="input-label">District</div>
            <select className="full">
              <option value="district"></option>
              <option value="district1">District 1</option>
              <option value="district2">District 2</option>
              <option value="district3">District 3</option>
            </select>
          </div>
          <div className="input-address">
            <div className="input-label">Province</div>
            <select className="full">
              <option value="province"></option>
              <option value="province1">Province 1</option>
              <option value="province2">Province 2</option>
              <option value="province3">Province 3</option>
            </select>
          </div>
          <div className="input-address">
            <div className="input-address">Postal</div>
            <input></input>
          </div>
          <div className="input-address">
            <div className="input-address">Facebook</div>
            <input></input>
          </div>
          <div className="input-address">
            <div className="input-address">Line ID</div>
            <input></input>
          </div>
          <div className="input-address">
            <div className="input-address">Instagram</div>
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercont;
