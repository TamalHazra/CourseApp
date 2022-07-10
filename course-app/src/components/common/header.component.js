import React, { Fragment} from "react";
import { Outlet, Link } from "react-router-dom";
import './header.styles.css'

const Header = () => {
  return (
    <Fragment>
    <div className="header">
      
        <div className="header-container">
        <Link to="/home">
          <h3>Home</h3></Link></div>
          <div className="header-container">
        <Link to="/about">
          <h3>About</h3></Link></div>
          <div className="header-container">
        <Link to="/api">
          <h3>Course</h3></Link></div>
      <Outlet />
    </div>
    </Fragment>
  );
};

export default Header;
