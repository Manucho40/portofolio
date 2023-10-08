import { Col, Modal, Row } from "antd";
import splash from "../../assets/splash.png";
import "./ModalProject.css";
import star from "../../assets/star.png";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ModalProject = ({ open, setOpen, modaldata }: any) => {
  const images = modaldata
    ? `http://localhost:1337${modaldata.attributes.images.data[0].attributes.url}`
    : "";
  // console.log(images);
  const titre = (
    <Col
      span={24}
      style={{ display: "flex", background: "black" }}
      className="center"
    >
      <img src={star} alt="" width={50} height={50} className="starMarg" />
      <h1
        style={{ fontFamily: "impact" }}
        className="responsive-text animate__animated animate__flipInX "
      >
        {modaldata && modaldata.attributes.Title}
      </h1>
      <img src={star} alt="" width={50} height={50} className="starMarg" />
    </Col>
  );
  return (
    <Modal
      title={titre}
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width="80%"
    >
      <Row>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{
            // padding: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img className="modalImg" src={images} alt="" />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className="background box-shadow"
        >
          <div className="description">
            <p>{modaldata && modaldata.attributes.description}</p>
          </div>

          <div className="link">
            <div>
              <FontAwesomeIcon
                icon={faGlobe}
                size="1x"
                style={{ opacity: 0.2, marginRight: 10 }}
              />
              <a target="_blank" href={modaldata && modaldata.attributes.link}>
                {modaldata && modaldata.attributes.link}
              </a>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                style={{ opacity: 0.2, marginRight: 10 }}
              />
              <a
                target="_blank"
                href={modaldata && modaldata.attributes.githubLink}
              >
                {modaldata && modaldata.attributes.githubLink}
              </a>
            </div>
          </div>
          <div className="stack">
            <p>{modaldata && modaldata.attributes.stack}</p>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalProject;
