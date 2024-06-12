import React from "react";
import { Controller } from "react-hook-form";

function Usercont({ control, defaultValues }) {
  return (
    <div>
      <div className="component-card">
        <div className="head-information">User Contact</div>
        <div className="eighty user-contact-columns">
          <div className="input-address eighty">
            <div className="input-address">Address</div>
            <Controller
              name="contact.address"
              control={control}
              defaultValue={defaultValues.contact.address || ""}
              render={({ field }) => <input className="full" {...field} />}
            />
          </div>
          <div className="input-address">
            <div className="input-label">Subdistrict</div>
            <Controller
              name="contact.subdistrict"
              control={control}
              defaultValue={defaultValues.contact.subdistrict || ""}
              render={({ field }) => (
                <select className="full" {...field}>
                  <option value=""></option>
                  <option value="subdistrict1">Subdistrict 1</option>
                  <option value="subdistrict2">Subdistrict 2</option>
                  <option value="subdistrict3">Subdistrict 3</option>
                </select>
              )}
            />
          </div>
          <div className="input-address">
            <div className="input-label">District</div>
            <Controller
              name="contact.district"
              control={control}
              defaultValue={defaultValues.contact.district || ""}
              render={({ field }) => (
                <select className="full" {...field}>
                  <option value=""></option>
                  <option value="district1">District 1</option>
                  <option value="district2">District 2</option>
                  <option value="district3">District 3</option>
                </select>
              )}
            />
          </div>
          <div className="input-address">
            <div className="input-label">Province</div>
            <Controller
              name="contact.province"
              control={control}
              defaultValue={defaultValues.contact.province || ""}
              render={({ field }) => (
                <select className="full" {...field}>
                  <option value=""></option>
                  <option value="province1">Province 1</option>
                  <option value="province2">Province 2</option>
                  <option value="province3">Province 3</option>
                </select>
              )}
            />
          </div>
          <div className="input-address">
            <div className="input-address">Postal</div>
            <Controller
              name="contact.postal"
              control={control}
              defaultValue={defaultValues.contact.postal || ""}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className="input-address">
            <div className="input-address">Facebook</div>
            <Controller
              name="contact.facebook"
              control={control}
              defaultValue={defaultValues.contact.facebook || ""}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className="input-address">
            <div className="input-address">Line ID</div>
            <Controller
              name="contact.lineId"
              control={control}
              defaultValue={defaultValues.contact.lineId || ""}
              render={({ field }) => <input {...field} />}
            />
          </div>
          <div className="input-address">
            <div className="input-address">Instagram</div>
            <Controller
              name="contact.instagram"
              control={control}
              defaultValue={defaultValues.contact.instagram || ""}
              render={({ field }) => <input {...field} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usercont;
