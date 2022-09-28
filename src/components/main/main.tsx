import React from 'react';
import SignUp from "./sign-up/sign-up";
import PersonalInfo from "./personal-Info/personal-info";

function Main() {
  return (
    <div className={"mainContainer"}>
      <SignUp/>
      <PersonalInfo/>
    </div>
  );
}

export default Main;