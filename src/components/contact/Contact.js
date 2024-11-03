import React, { useState } from "react";
import Container from "@mui/material/Container";
import emailjs from "@emailjs/browser";
import CustomAlert from "./Alert";
import Form from "./Form";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    text: "",
    message: "",
  });
  const [isAlert, setIsAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_g3c0vfn";
    const templateId = "template_raegahg";
    const publicKey = "airrzkTHnHtHmPrKl";

    const templateParams = {
      from_email: formValues.text,
      to_name: "Rhythm Messengers",
      message: formValues.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(
        (res) => {
          console.log("success", res);
          setFormValues({
            text: "",
            message: "",
          });
          setIsAlert(true);
        },
        (error) => {
          console.error("error", error);
          setIsAlert(false);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Container
      sx={{ color: "white", paddingBottom: "46px", paddingTop: "46px" }}
    >
      <CustomAlert isAlert={isAlert} />
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formValues={formValues}
      />
    </Container>
  );
};

export default Contact;
