import { FC } from "react";
import "./Card.css";

type Props = {
  // img: any;
  // name: string;
  // typeApp: string;
  openModal: any;
  project: any;
  open: boolean;
  setOpen?: any;
};
const CardProject: FC<Props> = ({ project, open, setOpen, openModal }) => {
  const images = `http://localhost:1337${project.attributes.images.data[0].attributes.url}`;
  return (
    <div className="Card" onClick={() => openModal(project)}>
      <img src={images} alt="" loading="lazy" />
      <div className="infoCard">
        <p className="titleProject">{project.attributes.Title}</p>
        <p className="typeApp">
          {project.attributes.typeapp.data.attributes.libelle}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
