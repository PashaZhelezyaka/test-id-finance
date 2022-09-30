import React from 'react';
import {Breadcrumbs} from "@mui/material";
import {useLocation, Link} from "react-router-dom";


function BreadcrumbsComponent() {

  const location = useLocation();
  const nameLocations: string[] = location.pathname.split('/').filter(el => el);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        {nameLocations.map((el, index) => {
          return (
            <Link  style={{textDecoration: "none"}} to={(el === "personal" ? "/signup/": "/") + el} key={index}>
              {el === "signup" ? "Sign Up" : "Personal Info"}
            </Link>
          )
        })}
      </Breadcrumbs>
    </div>
  );
}

export default BreadcrumbsComponent;