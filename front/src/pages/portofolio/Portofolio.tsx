import React, { useContext, useEffect, useState } from "react";
import "./Portofolio.css";
import img from "../../assets/instaclone.png";
import axios from "axios";
import { Button, Col, Modal, Row } from "antd";
import ModalProject from "../../components/Modals/ModalProject";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { RotatingLines, ThreeCircles } from "react-loader-spinner";
import CardProject from "../../components/CardProject/CardProject";
import { motion } from "framer-motion";
import img1 from "../../assets/proj_instagram.png";
import img2 from "../../assets/proj_chat.png";
import img3 from "../../assets/proj_compress_img.png";
import img4 from "../../assets/proj_moovies.png";
import img5 from "../../assets/proj_morpion.png";
import transition from "../../components/transition";
import ProjectsContext from "../../context/ProjectsContext";
const Portofolio = () => {
  const [typeProject, setTypeProject] = useState<string>("All");
  const [modaldata, setModaldata] = useState<any | null>(null);
  const [apiLoader, setApiLoader] = useState(true);
  const projects = useContext<any>(ProjectsContext).projects;

  useEffect(() => {
    if (projects) {
      setTimeout(() => {
        setApiLoader(false);
      }, 2000);
    }
  }, [projects]);

  const portofolio: any = projects.map((project: any) => {
    if (
      project.attributes.images.data &&
      project.attributes.images.data.length > 0 &&
      project.attributes.images.data[0].attributes.url
    ) {
      return (
        <CardProject
          key={project.id}
          img={project.attributes.images.data[0].attributes.url}
          appName={project.attributes.titre}
          typeApp={project.attributes.typeapp.data.attributes.libelle}
          projectId={project.id}
          // open={open}
          // openModal={openModal}
        />
      );
    }
  });

  console.log(projects);
  return (
    <div className="Portofolio">
      <div
        style={{
          display: "flex",
          color: "white",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {apiLoader ? (
          <ThreeCircles
            visible={true}
            height="100"
            width="50"
            color="#fff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          portofolio
        )}
      </div>
    </div>
  );
};

export default transition(Portofolio);
