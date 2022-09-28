import React from 'react';
import Footer from "./footer/footer";
import Header from "./header/header";
import {Outlet} from "react-router-dom"

function Layout() {
  return (
    <>
      <Header/>
  <div className={"mainContainer"}>
      <Outlet/>
  </div>
      <Footer/>
    </>
  );
}

export default Layout;