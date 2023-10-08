import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Header = ({ openMenu, setOpenMenu }: any) => {
  return (
    <header>
      <div>
        <h1 className="logo">KaeDev</h1>
      </div>
      <Nav />
      <div className="containerButton">
        <Link to={"/contact"}>Me contacter</Link>
      </div>
      <div
        onClick={() => setOpenMenu(!openMenu)}
        style={{ alignSelf: "center" }}
        className="containerBurger"
      >
        {openMenu ? (
          <FontAwesomeIcon
            icon={faClose}
            size="2x"
            style={{ opacity: 0.8 }}
            className="close"
          />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" style={{ opacity: 0.8 }} />
        )}
      </div>
    </header>
  );
};

export default Header;
