import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";
import Footer from "./Footer";
import Header from "./Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
      <Footer />
    </Router>
    </>
    
  )
}

export default App;