import React, { useEffect, useState } from "react";
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
const Portofolio = () => {
  const [typeProject, setTypeProject] = useState<string>("All");
  const [projects, setProjects] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [modaldata, setModaldata] = useState<any | null>(null);

  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     const response = axios
  //       .get("http://localhost:1337/api/projects?populate=*")
  //       .then((res) => {
  //         setLoading(false);
  //         setProjects(res.data.data);
  //       });
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // }, []);
  // console.log(projects && projects[0].attributes.images.data[0].attributes.url);

  const portofolioTrie =
    projects && typeProject === "All"
      ? projects
      : projects &&
        projects.filter(
          (project) =>
            project.attributes.typeapp.data.attributes.libelle === typeProject
        );
  function openModal(project: any) {
    setModaldata(project);
    setOpen(!open);
  }

  // const portofolio: any =
  //   portofolioTrie &&
  //   portofolioTrie.map((project) => (
  //     <CardProject
  //       // img={project.attributes.images.data[0].attributes.url}
  //       // name={project.attributes.Title}
  //       // typeApp={project.attributes.typeapp.data.attributes.libelle}
  //       project={project}
  //       key={project.id}
  //       open={open}
  //       openModal={openModal}
  //     />
  //   ));
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
        {/* <CardProject img={img1} />
        <CardProject img={img2} />
        <CardProject img={img3} />
        <CardProject img={img4} />
        <CardProject img={img5} /> */}
        <h1>En cours de réalisation...</h1>
      </div>
    </div>
  );
};

export default transition(Portofolio);
