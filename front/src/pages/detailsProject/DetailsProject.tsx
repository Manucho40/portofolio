import TitleWithStart from "../../components/TitleWithStart";
import "./DetailsProject.css";
import img from "../../assets/proj_instagram.png";
import InfosCv from "../../components/InfosCv/InfosCv";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProjectsContext from "../../context/ProjectsContext";
const DetailsProject = () => {
  const params = useParams();
  const projects = useContext<any>(ProjectsContext).projects;
  const project = projects.find(
    (project: any) => project.id === Number(params.id)
  );
  const imgUrl = `http://localhost:1337${project.attributes.images.data[0].attributes.url}`;
  console.log(project);

  return (
    <div className="DetailsProject">
      <p className="type-app">
        {project.attributes.typeapp.data.attributes.libelle}
      </p>
      <div className="title">
        <TitleWithStart title={project.attributes.Title} />
      </div>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0.2 }}
        transition={{ type: "spring", duration: 2 }}
        className="banner"
      >
        <img src={imgUrl} alt="insta" />
      </motion.div>
      <div className="About">
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
              <p className="type-app">Description</p>
              {project.attributes.description}
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
              <p className="type-app">La Stack</p>
              <ul>
                <li>{project.attributes.stack}</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="screen">
        {project.attributes.images.data.map((image: any) => (
          <div style={{ marginBottom: 10 }}>
            <Image
              width={300}
              style={{ borderRadius: 20 }}
              src={`http://localhost:1337${image.attributes.url}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsProject;
