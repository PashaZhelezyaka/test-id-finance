import React from 'react';
import Footer from "./footer/footer";
import Header from "./header/header";
import {Outlet} from "react-router-dom"
import BreadcrumbsComponent from "../main/breadcrumbs/breadcrumbs";

function Layout() {
  return (
    <>
      <Header/>
      <div className={"mainContainer"}>
        <BreadcrumbsComponent/>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default Layout;