import { Link } from "react-router-dom";
import "./Header.css";
import Nav from "./Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/AngeDev-logo.png";
const Header = ({ openMenu, setOpenMenu }: any) => {
  return (
    <header>
      <div>
        <img style={{ width: 170 }} src={logo} alt="logo" />
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
