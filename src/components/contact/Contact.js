import React, { useState } from "react";
import Container from "@mui/material/Container";
import emailjs from "@emailjs/browser";
import CustomAlert from "./Alert";
import Form from "./Form";
import * as Yup from "yup";
import { useFormik } from "formik";



const Contact = () => {
  const [isAlert, setIsAlert] = useState(null);

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .required("Please add email"),
    message: Yup.string().required("Please add a message").max(300),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const templateParams = {
        from_email: values.email,
        to_name: "Rhythm Messengers",
        message: values.message,
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICEID,
          process.env.REACT_APP_TEMPLATEID,
          templateParams,
          {
            publicKey: "airrzkTHnHtHmPrKl",
          }
        )
        .then((res) => {
          console.log("success", res);
          resetForm();
          setIsAlert(true);
        })
        .catch((err) => {
          console.log("err", err);
          setIsAlert(false);
        });
    },
  });


  return (
    <Container
      sx={{ color: "white", paddingBottom: "46px", paddingTop: "46px" }}
    >
      <CustomAlert isAlert={isAlert} />
      <Form formik={formik} />
    </Container>
  );
};

export default Contact;
