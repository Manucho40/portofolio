import { Col, Image, Row } from "antd";
import moi from "../../assets/moi.png";
import "./Apropos.css";
import fleche from "../../assets/fleche.png";
import star from "../../assets/star.png";
import InfosCv from "../../components/InfosCv/InfosCv";
import cv from "../../assets/cv.png";
import CubeInfo from "../../components/Cubes/CubeInfo";
import { Link } from "react-router-dom";
import CubePrfoile from "../../components/Cubes/CubeProfile";
import mywork from "../../assets/my-works.png";

const Apropos = () => {
  const openPDF = () => {
    window.open("../../assets/CV_KOUASSI_Ange_Emmanuel.pdf", "_blank");
  };
  return (
    <div className="Apropos">
      <Row gutter={16}>
        <Col
          className="gutter-row animate__animated animate__zoomIn animate__delay-1s"
          span={6}
          xs={24}
          sm={24}
          md={6}
          lg={6}
        >
          <div
            style={{
              padding: 10,
              textAlign: "center",
            }}
            className="background box-shadow infos infosTechnic"
          >
            <Image width="100%" src={moi} />
          </div>
        </Col>
        <Col className="gutter-row infoPlus" xs={24} sm={24} md={18} lg={18}>
          <div>
            <Col span={24} style={{ display: "flex" }} className="center">
              <img
                src={star}
                alt=""
                width={50}
                height={50}
                className="starMarg"
              />
              <h1
                style={{ fontFamily: "impact" }}
                className="responsive-text animate__animated animate__flipInX animate__delay-2s"
              >
                SUR MOI
              </h1>
              <img
                src={star}
                alt=""
                width={50}
                height={50}
                className="starMarg"
              />
            </Col>

            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              style={{ paddingLeft: 20, marginTop: 10 }}
              className="animate__animated animate__fadeInRight animate__delay-1s background box-shadow infos infosTechnic"
            >
              <Row>
                <Col span={24}>
                  <img src={fleche} alt="" />
                </Col>
              </Row>
              <Row style={{ marginTop: 5 }}>
                <Col span={24}>
                  <p style={{ fontSize: 36 }}>Ange Emmanuel</p>
                  <p
                    style={{
                      opacity: "0.8",
                      lineHeight: "25px",
                      margin: 0,
                      marginBottom: 5,
                      fontSize: "16px",
                    }}
                  >
                    Développeur Web et Mobile passionné et créatif avec de
                    solides connaissances dans la conception et le développement
                    d’applications web performantes. Compétent dans les langages
                    informatiques tels que JavaScript et C#, ainsi que dans des
                    frameworks populaires tels que React, React Native, NodeJS
                    et ASP.NET.
                  </p>
                </Col>
              </Row>
            </Col>
          </div>
        </Col>
      </Row>
      <Row gutter={10} style={{ marginTop: 10 }}>
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{ padding: 10 }}
        >
          <div
            className="background box-shadow infos infosTechnic"
            style={{ padding: 20 }}
          >
            <h3>EXPERIENCE</h3>
            <InfosCv
              annees="2020 - 2024"
              poste="Assistant IT"
              institution="Cabinet NID"
            />
          </div>
        </Col>
        <Col
          className="gutter-row"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{ padding: 10 }}
        >
          <div
            className="background box-shadow infos infosTechnic"
            style={{ padding: 20 }}
          >
            <h3>EXPERIENCE</h3>
            <InfosCv
              annees="2018 - 2021"
              poste="LICENCE PROFESSIONNELLE INFORMATIQUE"
              institution="IUTEA"
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col
          className="gutter-row animate__animated animate__fadeInLeft"
          xs={24}
          sm={24}
          md={24}
          lg={6}
        >
          <a href="/assets/CV_KOUASSI_Ange_Emmanuel.pdf" target="_blank">
            <button
              style={{
                background: "none",
                cursor: "pointer",
                borderRadius: 20,
              }}
            >
              <CubeInfo text="Mon CV" img={cv} taille={24} />
            </button>
          </a>
        </Col>
        <Col className="gutter-row" xs={24} sm={24} md={24} lg={12}>
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
                    style={{ color: "#0CC0DF", fontWeight: 500 }}
                  >
                    Together
                  </Link>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          className="gutter-row animate__animated animate__fadeInRight"
          xs={24}
          sm={24}
          md={24}
          lg={6}
        >
          <div style={{ height: "100%" }}>
            <CubePrfoile text="Réseaux" img={mywork} taille={24} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Apropos;
