import { Button, Form, Input, notification } from "antd";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

type FieldType = {
  from_name?: string;
  user_email?: string;
  message?: string;
};
const ContactForm = () => {
  const form = useRef<any>();
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const onFinish = async (values: any) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[0] = true;
      return newLoadings;
    });
    try {
      // Utilisez vos identifiants Email.js pour envoyer l'e-mail
      const response = await emailjs.send(
        "service_zbx9ki8",
        "template_pt2ycgn",
        values,
        "CoK2I82jv0WashQFE"
      );
      console.log("E-mail envoyé avec succès:", response);
      form.current.resetFields();
      // Affiche une notification en cas de succès
      notification.success({
        message: "Succès",
        description: "Votre message a été envoyé avec succès!",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);

      // Affiche une notification en cas d'erreur
      notification.error({
        message: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
      });
    }
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[0] = false;
      return newLoadings;
    });
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 2000);
  };
  //   console.log(form?.current);

  return (
    <>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        ref={form}
      >
        <Form.Item<FieldType>
          name="from_name"
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: "Saisissez votre nom svp!" }]}
        >
          <Input
            placeholder="Nom"
            size="large"
            className="backgroundInput"
            style={{ border: "none", color: "white" }}
            name="from_name"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="user_email"
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
            name="user_email"
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
            loading={loadings[0]}
            style={{ width: "100%", fontSize: "15px" }}
          >
            Envoyer
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ContactForm;
