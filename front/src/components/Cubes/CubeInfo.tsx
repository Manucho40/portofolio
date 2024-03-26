import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import { FC, useState } from "react";

type Props = {
  img: any;
  text: string;
  taille: number;
};
const CubeInfo: FC<Props> = ({ img, text, taille }) => {
  const [overCube, setOverCube] = useState<boolean>(false);
  return (
    <Col
      span={taille}
      style={{ padding: 10, height: "100%" }}
      onMouseOver={() => setOverCube(true)}
      onMouseLeave={() => setOverCube(false)}
      className="box-shadow background"
    >
      <Row style={{ height: "70%" }}>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <img src={img} alt="" style={{ width: "75%" }} loading="lazy" />
        </Col>
      </Row>
      <Row
        style={{
          height: "30%",
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
              fontSize: 10,
              fontWeight: "bold",
            }}
          >
            {text}
          </p>
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="1x"
            style={{ opacity: overCube ? 1 : 0.2, transition: "500ms" }}
            className="App-logo"
          />
        </Col>
      </Row>
    </Col>
  );
};

export default CubeInfo;
