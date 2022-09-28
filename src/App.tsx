import React from 'react';
import './App.css';
// import Header from "./components/layout/header/header";
// import Footer from "./components/layout/footer/footer";
// import Main from "./components/main/main";
import {Routes, Route} from 'react-router-dom';
import SignUp from "./components/main/sign-up/sign-up";
import PersonalInfo from "./components/main/personal-Info/personal-info";
import Layout from "./components/layout/layout";


function App() {
  return (
    <div className={"containerApp"}>
      <Routes>
        <Route path="/" element={<Layout/>} >
        {/*<div className={"mainContainer"}>*/}
          <Route index element={<SignUp/>} />
          <Route path="personal" element={<PersonalInfo/>} />
        {/*</div>*/}
          </Route>
      </Routes>
    </div>
  );
}

export default App;
