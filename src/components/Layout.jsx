import "../index.css";
import Title from "../Title";
import Video from "../Video";
import About from "../pages/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  useEffect(() => {
    if (location.hash === "#Contact" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
    if (location.hash === "#About" && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [location.hash, isRendered]);

  return (
    <div>
      <Title />
      <Video />
      <div
        ref={aboutRef}
        style={{
          position: "relative",
          top: "-100px",
        }}
      />
      <About />
      <div
        ref={contactRef}
        style={{
          backgroundColor: "#141A1F",
        }}
      >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
