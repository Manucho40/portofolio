import React, { useEffect, useState } from "react";
import "./Portofolio.css";
import CardProject from "../../components/Cards/CardProject";
import img from "../../assets/instaclone.png";
import axios from "axios";
import { Button, Col, Modal, Row } from "antd";
import ModalProject from "../../components/Modals/ModalProject";
const Portofolio = () => {
  const [typeProject, setTypeProject] = useState<string>("All");
  const [projects, setProjects] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);
  const [modaldata, setModaldata] = useState<any | null>(null);

  useEffect(() => {
    try {
      const response = axios
        .get("http://localhost:1337/api/projects?populate=*")
        .then((res) => {
          setLoading(false);
          setProjects(res.data.data);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
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

  const portofolio: any =
    portofolioTrie &&
    portofolioTrie.map((project) => (
      <CardProject
        // img={project.attributes.images.data[0].attributes.url}
        // name={project.attributes.Title}
        // typeApp={project.attributes.typeapp.data.attributes.libelle}
        project={project}
        key={project.id}
        open={open}
        openModal={openModal}
      />
    ));
  return (
    <div className="Portofolio">
      <ul>
        <li className="typeProject">
          <button
            onClick={() => setTypeProject("All")}
            className={typeProject === "All" ? "projectSelected" : ""}
          >
            All
          </button>
        </li>
        <li className="typeProject">
          <button
            onClick={() => setTypeProject("Web")}
            className={typeProject === "Web" ? "projectSelected" : ""}
          >
            Web
          </button>
        </li>
        <li className="typeProject">
          <button
            onClick={() => setTypeProject("Extension")}
            className={typeProject === "Extension" ? "projectSelected" : ""}
          >
            Extension
          </button>
        </li>
        <li className="typeProject">
          <button
            onClick={() => setTypeProject("Mobile")}
            className={typeProject === "Mobile" ? "projectSelected" : ""}
          >
            Mobile
          </button>
        </li>
      </ul>
      <ModalProject open={open} setOpen={setOpen} modaldata={modaldata} />
      <div className="bodyList">{portofolio}</div>
    </div>
  );
};

export default Portofolio;
