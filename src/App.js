import "./index.css";
import Title from "./Title";
import NavBar from "./components/NavBar";
import Video from "./Video";
import About from "./pages/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import React from "react";
import { useParams } from "react-router-dom";

function App() {
  const aboutRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const { id } = useParams();

  React.useEffect(() => {
    handleClick(id);
  }, [id]);

  const handleClick = (id) => {
    if (id === "Contact") {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
    if (id === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  return (
    <div>
      <NavBar handleClick={handleClick} />
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
