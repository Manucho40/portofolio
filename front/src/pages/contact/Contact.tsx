import React, { useRef } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
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
import emailjs from "@emailjs/browser";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

type FieldType = {
  from_name?: string;
  to_name?: string;
  message?: string;
};

const Contact = () => {
  const form: any = useRef();

  const onFinish = (values: any) => {
    console.log(values);
    emailjs
      .sendForm(
        "service_zbx9ki8",
        "template_zdqdztg",
        values,
        "CoK2I82jv0WashQFE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  console.log(form?.current);

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
                    color: "#5b78f6",
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
            <Form
              name="basic"
              wrapperCol={{ span: 24 }}
              // style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              ref={form}
            >
              <Form.Item<FieldType>
                name="to_name"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: "Saisissez votre nom svp!" },
                ]}
              >
                <Input
                  placeholder="Nom"
                  size="large"
                  className="backgroundInput"
                  style={{ border: "none", color: "white" }}
                  name="to_name"
                />
              </Form.Item>
              <Form.Item<FieldType>
                name="from_name"
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    type: "email",
                    message: "Le mail n'est pas valide!",
                  },
                  {
                    required: true,
                    message: "Saisissez votre mail svp!",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  size="large"
                  className="backgroundInput"
                  style={{ border: "none", color: "white" }}
                  name="from_name"
                />
              </Form.Item>

              <Form.Item<FieldType>
                name="message"
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Saisissez le contenu de votre mail!",
                  },
                ]}
              >
                <Input.TextArea
                  placeholder="Message"
                  className="backgroundInput"
                  style={{ border: "none", color: "white" }}
                  autoSize={{ minRows: 6, maxRows: 6 }}
                  name="message"
                />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Contact;
