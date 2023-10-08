import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  return (
    <ul className="nav">
      <li>
        <Link
          to="/"
          style={
            location.pathname === "/" ? { color: "white" } : { color: "gray" }
          }
        >
          Accueil
        </Link>
      </li>
      <li>
        <Link
          to="/apropos"
          style={
            location.pathname === "/apropos"
              ? { color: "white" }
              : { color: "gray" }
          }
        >
          Apropos
        </Link>
      </li>
      <li>
        <Link
          to="/portofolio"
          style={
            location.pathname === "/portofolio"
              ? { color: "white" }
              : { color: "gray" }
          }
        >
          Portofolio
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          style={
            location.pathname === "/contact"
              ? { color: "white" }
              : { color: "gray" }
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
