import React,{useState, useEffect} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import About from './components/about/About'


const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setPosition({ x: e.clientX, y: e.clientY });
  //   };
  //   document.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const lagFactor = 0.3; // Adjust this value to control the lag effect
      const x = event.clientX;
      const y = event.clientY;
      setPosition({ x: position.x + (x - position.x) * lagFactor, y: position.y + (y - position.y) * lagFactor });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [position]);

  return(
    <div>
      
      <Header />
      <Nav />
      <About/>
      <Experience />
      <Portfolio/>
      <Contact/>
      <Footer/>
      {/* <div
        className="blob"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      /> */}
      <div className="blob" style={{ top: position.y, left: position.x }}></div>
     
      <div className="overlay" />
    </div>
  );
}

export default App;