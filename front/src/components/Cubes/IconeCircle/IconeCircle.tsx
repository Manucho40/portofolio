import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconeCircle.css";

const IconeCircle = ({ valueIcon, url }: any) => {
  return (
    <a target="_blank" href={url} className="IconHover" rel="noreferrer">
      <FontAwesomeIcon icon={valueIcon} size="3x" />
    </a>
  );
};

export default IconeCircle;
