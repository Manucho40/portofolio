import TitleWithStart from "../../components/TitleWithStart";
import "./DetailsProject.css";
import img from "../../assets/proj_instagram.png";
import InfosCv from "../../components/InfosCv/InfosCv";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ProjectsContext from "../../context/ProjectsContext";
import BaseURL from "../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const DetailsProject = () => {
  const params = useParams();
  const projects = useContext<any>(ProjectsContext).projects;
  const project = projects.find(
    (project: any) => project.id === Number(params.id)
  );
  const imgUrl = `${BaseURL}`;
  console.log(project.attributes.githubLink);
  return (
    <div className="DetailsProject">
      <p className="type-app">
        {project.attributes.typeapp.data.attributes.libelle}
      </p>
      <div className="title">
        <TitleWithStart title={project.attributes.title} />
      </div>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0.2 }}
        transition={{ type: "spring", duration: 2 }}
        className="banner"
      >
        <img
          src={require(`../../${project.attributes.images.data[0].attributes.url}`)}
          alt="insta"
        />
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
              <h3 className="type-app">Description</h3>
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
              <h3 className="type-app">Informations</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: 100,
                }}
              >
                <div style={{ width: "50%" }}>
                  <p className="type-app"> Stack</p>
                  <ul>
                    <li>{project.attributes.stack}</li>
                  </ul>
                </div>
                <div className="lien" style={{ width: "50%" }}>
                  <p className="type-app"> Liens</p>
                  <div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="1x" />
                      <a
                        href={`${project.attributes.lienGithub}`}
                        target="true"
                        style={{ marginLeft: 10, color: "white" }}
                      >
                        Lien GitHub
                      </a>
                    </div>
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <FontAwesomeIcon icon={faGlobe} />
                    <a
                      style={{ marginLeft: 10, color: "white" }}
                      href={`${project.attributes.lien}`}
                      target="true"
                    >
                      Lien Site
                    </a>
                  </div>
                </div>
              </div>
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
              src={require(`../../${image.attributes.url}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsProject;
