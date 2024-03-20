import { Card } from "antd";
import "./CardProject.css";
import Meta from "antd/es/card/Meta";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {
  img: any;
  appName: string;
  typeApp: string;
  projectId: number;
};

const CardProject: React.FC<Props> = ({ img, appName, typeApp, projectId }) => {
  const ref = useRef<any>();

  const cardSurvol = (Event: any) => {
    if (ref.current) {
      ref.current.style.transform = "scale(0.9)";
      ref.current.style.transition = "ease-in-out 0.5s";
    }
  };
  const resetCardSurvol = (Event: any) => {
    if (ref.current) {
      ref.current.style.transform = "scale(1)";
      ref.current.style.transition = "ease-in-out 0.5s";
    }
  };
  const imgUrl = `http://localhost:1337${img}`;
  return (
    <Link to={`/detail/${projectId}`}>
      <motion.div
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="CardProject background box-shadow"
      >
        <Card
          hoverable
          style={{
            width: 300,
            border: "none",
            borderRadius: 20,
            background: "none",
          }}
          cover={
            <img
              ref={ref}
              alt="example"
              style={{ borderRadius: 20, width: "100%", height: 200 }}
              // onMouseOver={cardSurvol}
              // onMouseLeave={resetCardSurvol}
              src={imgUrl}
            />
          }
        >
          <Meta className="meta" title={appName} description={typeApp} />
        </Card>
      </motion.div>
    </Link>
  );
};

export default CardProject;
