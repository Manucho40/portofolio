import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconeCircle.css";
type Props = {
  valueIcon: any;
  url: string;
};
const IconeCircle = ({ valueIcon, url }: any) => {
  return (
    <a target="_blank" href={url} className="IconHover">
      <FontAwesomeIcon icon={valueIcon} size="3x" />
    </a>
  );
};

export default IconeCircle;
