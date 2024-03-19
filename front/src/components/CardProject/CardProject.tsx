import { Card } from "antd";
import "./CardProject.css";
import Meta from "antd/es/card/Meta";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
type Props = {
  img: string;
};

const CardProject: React.FC<Props> = ({ img }) => {
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
  return (
    <Link to={`/detail/${1}`}>
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
              src={img}
            />
          }
        >
          <Meta
            className="meta"
            title="Europe Street beat"
            description="www.instagram.com"
          />
        </Card>
      </motion.div>
    </Link>
  );
};

export default CardProject;
