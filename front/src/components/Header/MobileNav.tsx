import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const MobileNav = ({ openMenu, setOpenMenu }: any) => {
  const location = useLocation();
  return (
    <ul className="MobileNav" style={openMenu ? { top: 0 } : {}}>
      <li>
        <Link
          to="/"
          style={
            location.pathname === "/" ? { color: "white" } : { color: "gray" }
          }
          onClick={() => setOpenMenu(!openMenu)}
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
          onClick={() => setOpenMenu(!openMenu)}
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
          onClick={() => setOpenMenu(!openMenu)}
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
          onClick={() => setOpenMenu(!openMenu)}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default MobileNav;
