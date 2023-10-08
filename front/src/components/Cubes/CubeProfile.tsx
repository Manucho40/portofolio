import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import { FC, useState } from "react";
import IconeCircle from "./IconeCircle/IconeCircle";
import "./IconeCircle/IconeCircle.css";
type Props = {
  img: any;
  text: string;
  taille: number;
};
const CubePrfoile: FC<Props> = ({ img, text, taille }) => {
  const [overCube, setOverCube] = useState<boolean>(false);
  return (
    <Col
      span={taille}
      style={{
        padding: 10,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      onMouseOver={() => setOverCube(true)}
      onMouseLeave={() => setOverCube(false)}
      className="box-shadow background infosTechnic"
    >
      <Row
        style={{
          padding: 10,
          display: "flex",
          height: "50%",
        }}
      >
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col span={24} className="IconContainer">
            <IconeCircle
              valueIcon={faGithub}
              url="https://github.com/Manucho40"
            />
            <IconeCircle
              valueIcon={faLinkedin}
              url="https://www.linkedin.com/in/ange-emmanuel-kouassi-86b33316b/"
            />
          </Col>
        </Col>
      </Row>
      <Row
        style={{
          height: "50%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <Col
          span={24}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <p
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {text}
          </p>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2x"
            style={{ opacity: overCube ? 1 : 0.2, transition: "500ms" }}
            className="App-logo"
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CubePrfoile;
