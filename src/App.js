import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Userinfo from "./user-info";
import Usercont from "./user-cont";
import Useredu from "./user-educ";
import Userexp from "./user-exp";
import Userskill from "./user-skill";
import Userint from "./user-interest";
import Userguild from "./user-guild";

function App() {
  const { control, handleSubmit, watch, setValue } = useForm();

  const defaultValues = {
    information: {
      userImage: "path/to/image.jpg",
      userCoverBanner: "path/to/banner.jpg",
      username: "johndoe",
      nickname: "Johnny",
      firstname: "John",
      lastname: "Doe",
      positionOption: "Manager",
      nationality: "American",
      telephoneNumber: "123-456-7890",
      startingDate: new Date(),
    },
    contact: {
      address: "123 Main St",
      subdistrict: "Subdistrict",
      district: "District",
      province: "Province",
      postal: "12345",
      facebook: "john.doe",
      lineId: "johnny123",
      instagram: "johnny_insta",
    },
    education: [{ year: "2017", university: "ABC University" }],
    experience: [{ year: "2017", company: "BDF", position: "Frontend" }],
    skill: [{ skill: "Python", score: 8 }],
    interest: [{ interest: "GIO" }],
    guild: [{ guild: "T-POP" }],
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="text-black">Resume Profile</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Userinfo control={control} defaultValues={defaultValues} />
        <Usercont control={control} defaultValues={defaultValues} />
        <Useredu control={control} defaultValues={defaultValues} setValue={setValue} />
        <Userexp control={control} defaultValues={defaultValues} setValue={setValue} />
        <Userskill control={control} defaultValues={defaultValues} setValue={setValue} />
        <Userint control={control} defaultValues={defaultValues} setValue={setValue} />
        <Userguild control={control} defaultValues={defaultValues} setValue={setValue} />
        <p>{JSON.stringify(watch())}</p>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
