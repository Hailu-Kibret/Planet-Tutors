import Blog from "./Components/BlogSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Testimonials from "./Components/Testimonials";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Testimonials" element={<Testimonials />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
