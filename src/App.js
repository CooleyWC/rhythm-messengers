import './index.css';
import Title from './Title';
import NavBar from './NavBar';
import Video from './Video';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
        <Title />
        <Video />
        <NavBar />
        <About />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
