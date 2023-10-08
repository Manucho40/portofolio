import { Row, Col } from "antd";
import "./Footer.css";
import Nav from "../Header/Nav";
const Footer = () => {
  return (
    <div className="footer">
      <Row className="marginFooter">
        <Col span={24}>
          <h1 className="logo">KaeDev</h1>
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
