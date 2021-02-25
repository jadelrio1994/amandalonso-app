import { Button } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="header__container">
        <div className="header__haeder">
          <h1>Amanda Alonso del Rio</h1>
          <p>Artes visuales y procesos creativos</p>
        </div>
        <nav className="header__navbar">
          <ul className="header__navbar-list">
            <li>
              <NavLink
                className="header__navbar-item"
                activeClassName="active"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header__navbar-item"
                activeClassName="active"
                to="/trabajo"
              >
                Trabajo
              </NavLink>
            </li>
            <li>
              <NavLink
                className="header__navbar-item"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Link to="/auth/login" className="header__login">
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Link>
    </div>
  );
};
