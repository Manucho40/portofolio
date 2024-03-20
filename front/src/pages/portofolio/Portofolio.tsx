import React, { useContext, useEffect, useState } from "react";
import "./Portofolio.css";
import img from "../../assets/instaclone.png";
import axios from "axios";
import { Button, Col, Modal, Row } from "antd";
import ModalProject from "../../components/Modals/ModalProject";
import { faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import { RotatingLines } from "react-loader-spinner";
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
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [modaldata, setModaldata] = useState<any | null>(null);

  const projects = useContext<any>(ProjectsContext).projects;

  const portofolioTrie =
    projects && typeProject === "All"
      ? projects
      : projects &&
        projects.filter(
          (project: any) =>
            project.attributes.typeapp.data.attributes.libelle === typeProject
        );
  function openModal(project: any) {
    setModaldata(project);
    setOpen(!open);
  }

  const portofolio: any =
    portofolioTrie &&
    portofolioTrie.map((project: any) => (
      <CardProject
        img={project.attributes.images.data[0].attributes.url}
        appName={project.attributes.Title}
        typeApp={project.attributes.typeapp.data.attributes.libelle}
        projectId={project.id}
        // open={open}
        // openModal={openModal}
      />
    ));
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
        {portofolio}
      </div>
    </div>
  );
};

export default transition(Portofolio);
