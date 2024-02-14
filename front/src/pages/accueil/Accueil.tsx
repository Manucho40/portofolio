import { Button, Space, Row, Col } from "antd";
import "./Accueil.css";
import CubeInfo from "../../components/Cubes/CubeInfo";
import img from "../../assets/logo512.png";
import mywork from "../../assets/my-works.png";
import mobileDevelpment from "../../assets/mobile-development.png";
import webDevelpment from "../../assets/web-development.png";
import reactDevelopment from "../../assets/react.png";
import backend from "../../assets/backend.png";
import fleche from "../../assets/fleche.png";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CubeProfile from "../../components/Cubes/CubeProfile";
import moi from "../../assets/moi.png";
import blog from "../../assets/blog.png";
import { Link, NavLink } from "react-router-dom";
import "animate.css";
const Accueil = () => {
  return (
    <div className="accueil">
      <Row gutter={24}>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          style={{
            padding: "30px",

            display: "flex",
            alignItems: "center",
          }}
          className="infos box-shadow background animate__animated animate__zoomIn animate__delay-1s"
        >
          <Col
            style={{
              width: "250px",
              height: "224px",
              background: "#0CC0DF",
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <img
              src={moi}
              alt=""
              style={{
                display: "block",
                height: "100%",
                width: "100%",
                borderRadius: 30,
              }}
            />
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 3,
            }}
            className="infoText"
          >
            <span>Developpeur Web & Mobile</span>
            <h2 style={{ fontSize: 25 }}>Ange Emmanuel KOUASSI</h2>
            <span>Je suis un développeur Web et Mobile basé à Abidjan</span>
          </Col>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          className="animate__animated animate__zoomIn animate__delay-1s"
        >
          <Row className="infosTechnic">
            <Col
              span={24}
              style={{
                background: "#1F1F1F",
                height: 50,
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                padding: 10,
              }}
              className="box-shadow"
            >
              <p className="bienvenu">BienVenue Sur Mon Portfolio</p>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }} gutter={16}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <CubeInfo text="Dev React" img={img} taille={24} />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} className="infoPlus">
              <Link to={"/apropos"}>
                <CubeInfo text="Plus sur moi" img={mywork} taille={24} />
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 20 }}>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          className="animate__animated animate__fadeInLeft"
        >
          <a target="_blank" href="https://www.kae-dev.com/">
            <CubeInfo text="Mon Blog" img={blog} taille={24} />
          </a>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className="background box-shadow infosTechnic animate__animated animate__zoomIn animate__delay-1s"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Row
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginTop: 20,
              height: "50%",
              width: "100%",
            }}
          >
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <img src={webDevelpment} style={{ width: 40, height: 40 }} />
            </Col>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <img src={mobileDevelpment} style={{ width: 40, height: 40 }} />
            </Col>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <img src={reactDevelopment} style={{ width: 40, height: 40 }} />
            </Col>
            <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
              <img src={backend} style={{ width: 40, height: 40 }} />
            </Col>
          </Row>
          <Row style={{ height: "50%" }}>
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                }}
              >
                Services
              </p>
              <FontAwesomeIcon
                icon={faLaptopCode}
                size="1x"
                style={{ opacity: 0.2 }}
              />
            </Col>
          </Row>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          className="animate__animated animate__fadeInRight"
        >
          <CubeProfile text="Réseaux" img={mywork} taille={24} />
        </Col>
      </Row>
      <Row gutter={24} style={{ marginTop: 20 }}>
        <Col xs={24} sm={24} md={24} lg={12} className="infos infosTechnic">
          <div
            style={{ display: "flex", padding: "20px" }}
            className="background box-shadow alignBox"
          >
            <Col
              offset={2}
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: 20,
              }}
              className="background box-shadow"
            >
              <p style={{ fontSize: 50 }}>05</p>
              <p style={{ fontSize: 15, marginBottom: 10 }}>
                Années <br /> d'expériences
              </p>
            </Col>
            <Col
              offset={2}
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: 20,
              }}
              className="background box-shadow infoText"
            >
              <p style={{ fontSize: 50 }}>05</p>
              <p style={{ fontSize: 15, marginBottom: 10 }}>
                Années <br /> d'expériences
              </p>
            </Col>
            <Col
              offset={2}
              style={{
                textAlign: "center",
                padding: "20px",
                borderRadius: 20,
              }}
              className="background box-shadow infoText"
            >
              <p style={{ fontSize: 50 }}>05</p>
              <p style={{ fontSize: 15, marginBottom: 10 }}>
                Années <br /> d'expériences
              </p>
            </Col>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} className="infos infosTechnic">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingLeft: 20,
              height: "100%",
            }}
            className="background box-shadow"
          >
            <Row>
              <Col span={24}>
                <img src={fleche} alt="" />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <p
                  className="responsive-text"
                  // style={{ marginTop: 10, marginBottom: 10 }}
                >
                  Let's work&nbsp;
                  <Link
                    to="/contact"
                    style={{
                      color: "#0CC0DF",
                      fontWeight: 500,
                      marginRight: 10,
                    }}
                  >
                    Together
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
};

export default Accueil;
