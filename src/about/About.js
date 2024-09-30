import React from "react";
import { Box } from "@mui/material";
import AboutSection from "./AboutSection";
import EnergySection from "./EnergySection";
import CustomPerformancesSection from "./CustomPerformancesSection";
import ServicesSection from "./ServicesSection";
import Sponsors from "./Sponsors";

const About = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#141A1F", padding: 0, margin: 0 }}>
        <AboutSection />
        <EnergySection />
        <CustomPerformancesSection />
        <ServicesSection />
        <Sponsors />
      </Box>
    </>
  );
};

export default About;
