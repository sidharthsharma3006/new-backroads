import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Tours from "./components/Tours"; 
import Hero from "./components/Hero";  
import About from "./components/About"; 
import Services from "./components/Services";  



function App() {
  return (
   <div>
   <Navbar/>
   <Hero/>
   <About/> 
   <Services/>
   <Tours/>
   <Footer/>
    </div>
  );
}

export default App;
