import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";

const CardContact = ({ titre, libelle1, libelle2, icone }: any) => {
  return (
    <>
      <Row
        style={{
          marginBottom: 50,
        }}
      >
        <Col span={8}>
          <div
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1f1f1f",
              padding: "5px",
              borderRadius: 5,
            }}
            className="box-shadow animate__animated animate__fadeInBottomRight"
          >
            <FontAwesomeIcon icon={icone} size="2x" style={{ opacity: 0.8 }} />
          </div>
        </Col>
        <Col span={16}>
          <div className="animate__animated animate__fadeInTopLeft">
            <p style={{ color: "gray" }}>{titre}</p>
            <p style={{ fontWeight: "bold" }}>{libelle1}</p>
            <p style={{ fontWeight: "bold" }}>{libelle2}</p>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CardContact;
