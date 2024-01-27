import './index.css';
import Title from './Title';
import NavBar from './NavBar';
import Video from './Video';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './Footer';
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';


function App(props) {
  const aboutRef = React.useRef(null)
  const contactRef = React.useRef(null)

  const { id } = useParams()

  React.useEffect(() => {
    handleClick(id)
  }, [id])

  const handleClick = (id) => {
    if (id === 'Contact') {
      contactRef.current.scrollIntoView({ behavior: "smooth", inline: "start" })
    }
    if (id === 'About') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', inline: "start" })
    }
  }

  return (
    <div>
      <NavBar handleClick={handleClick} />
      <Title />
      <Video />
      <div ref={aboutRef} style={{
        position: 'relative',
        top: '-100px'
      }} />
      <About />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
