import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import Alert from "@mui/material/Alert";

const CustomAlert = ({ isAlert }) => {
  return (
    <>
      {isAlert === true && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ marginBottom: "15px" }}
        >
          Your message was sent!
        </Alert>
      )}
      {isAlert === false && (
        <Alert severity="error" sx={{ marginBottom: "15px" }}>
          There was a problem sending your message. Please call us!
        </Alert>
      )}
    </>
  );
};

export default CustomAlert;
