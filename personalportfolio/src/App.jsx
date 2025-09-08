import Navbar from "./component/Navbar";
import './index.css';


import { DataProvider } from "./context/PortfolioContext";
import HeroSection from "./component/Hero";
import Skill from "./component/Skill";
import Projects from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Testimonials from "./component/Testimonials";
import Service from "./component/Service";
import About from "./component/About";

function App() {
  return (
    <DataProvider>
      <Navbar/>
      
        <HeroSection/>
<About/>
        <Skill/>
        <Projects/> 
<Testimonials/>
<Service/>
        <Contact/>
<Footer/>
    </DataProvider>
  );
}

export default App;
