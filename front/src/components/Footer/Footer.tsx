import { Row, Col } from "antd";
import "./Footer.css";
import Nav from "../Header/Nav";
import logo from "../../assets/AngeDev-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <Row className="marginFooter">
        <Col span={24}>
          <img style={{ width: 170 }} src={logo} alt="logo" />
        </Col>
      </Row>
      <Row className="marginFooter">
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Nav />
        </Col>
      </Row>
      <Row className="marginFooter">
        <Col span={24}>
          <span>© Tout droits reservés a KaeDev</span>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
