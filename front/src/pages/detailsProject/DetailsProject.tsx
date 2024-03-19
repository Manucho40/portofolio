import TitleWithStart from "../../components/TitleWithStart";
import "./DetailsProject.css";
import img from "../../assets/proj_instagram.png";
import InfosCv from "../../components/InfosCv/InfosCv";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";
const DetailsProject = () => {
  return (
    <div className="DetailsProject">
      <p className="type-app">Application - Mobile</p>
      <div className="title">
        <TitleWithStart title="CLONE INSTAGRAM" />
      </div>
      <motion.div
        animate={{ scale: 1 }}
        initial={{ scale: 0.2 }}
        transition={{ type: "spring", duration: 2 }}
        className="banner"
      >
        <img src={img} alt="insta" />
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
              <p className="type-app">Description</p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              iusto harum illo laborum unde praesentium nihil natus ad hic
              voluptatum iure inventore similique quis aut qui nostrum, ratione
              facere! Dolore?
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
              <p className="type-app">La Stack</p>
              <ul>
                <li>React Js</li>
                <li>Ant Design</li>
                <li>Node Js</li>
                <li>ExpressJs</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="screen">
        <div style={{ marginBottom: 10 }}>
          <Image
            width={500}
            style={{ borderRadius: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Image
            width={500}
            style={{ borderRadius: 20 }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsProject;
