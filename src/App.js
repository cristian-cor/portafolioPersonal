import {useEffect, useState} from 'react'
import './App.css'
import About from './components/About';
import Cover from './components/Cover';
import Footer from './components/Footer';
import Info from './components/Info';
import Navbar from './components/Navbar';
import Slider from './components/Slider';


function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };


  return (
    <div className="App">
     <Navbar  isScrolling={scrollHeight}/>
     <Cover/>
     <About/>
     <Slider/>
     <Info/>
     <Footer/>
    </div>
  );
}

export default App;
