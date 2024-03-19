import React, { useRef } from "react";
import { Col, Row } from "antd";
import "./Contact.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CubeProfile from "../../components/Cubes/CubeProfile";
import CardContact from "../../components/CardContact/CardContact";
import IconeCircle from "../../components/Cubes/IconeCircle/IconeCircle";
import { Link } from "react-router-dom";
import fleche from "../../assets/fleche.png";
import ContactForm from "../../components/Forms/ContactForm";
import { Button, Form, Input } from "antd";
import emailjs from "@emailjs/browser";
import transition from "../../components/transition";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const Contact = () => {
  return (
    <Row className="contact" gutter={20}>
      <Col className="gutter-row" xs={24} sm={24} md={6} lg={6}>
        <div>
          <div style={{ marginBottom: 20 }}>
            <p>CONTACT INFO</p>
          </div>
          <CardContact
            titre="Nos Mails"
            libelle1="ae.kouassi@hotmail.com"
            libelle2="rickypaine40@gmail.com"
            icone={faEnvelope}
          />
          <CardContact
            titre="Contactez moi"
            libelle1="+255-01-60-50-46-94"
            libelle2="+255-07-79-65-01-17"
            icone={faPhone}
          />
          <CardContact
            titre="Localisation"
            libelle1="Côte d'ivoire"
            libelle2="Abidjan"
            icone={faLocationDot}
          />
        </div>
        <div style={{ marginTop: 20 }}>
          <p>CONTACT INFO</p>
          <div style={{ marginTop: 10 }}>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="animate__animated animate__fadeInUp"
            >
              <IconeCircle
                valueIcon={faGithub}
                url="https://github.com/Manucho40"
              />
              <IconeCircle
                valueIcon={faLinkedin}
                url="https://www.linkedin.com/in/ange-emmanuel-kouassi-86b33316b/"
              />
              <IconeCircle
                valueIcon={faTwitter}
                url="https://twitter.com/KAEDEV296794"
              />
            </div>
          </div>
        </div>
      </Col>
      <Col className="gutter-row" xs={24} sm={24} md={18} lg={18}>
        <div
          style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 5 }}
          className="background"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between ",
            }}
          >
            <div>
              <p
                className="responsive-text"
                // style={{ marginTop: 10, marginBottom: 10 }}
              >
                Let's work&nbsp;
                <Link
                  to="/contact"
                  style={{
                    color: "#0CC0DF",
                    fontWeight: 500,
                    marginRight: 10,
                  }}
                >
                  Together
                </Link>
              </p>
            </div>
            <div>
              <img src={fleche} alt="" />
            </div>
          </div>
          <div className="infoText">
            <ContactForm />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default transition(Contact);
