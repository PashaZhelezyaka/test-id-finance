import React, {useEffect} from 'react';
import Footer from "./footer/footer";
import Header from "./header/header";
import {Outlet, useLocation, useNavigate} from "react-router-dom"
import BreadcrumbsComponent from "../main/breadcrumbs/breadcrumbs";

function Layout() {

  const location = useLocation();
  const nameLocations: number = location.pathname.length;
  const navigate = useNavigate();
  const nextStepRedirect = () => navigate('/signup');
  useEffect(() => {
    if (nameLocations === 1) nextStepRedirect();
  })

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