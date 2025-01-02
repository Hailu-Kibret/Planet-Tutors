import Blog from "./Components/BlogSection";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Testimonials from "./Components/Testimonials";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Resources from "./Pages/Resources";
import Services from "./Pages/Services";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import "./index.css";
import { TutorsProvider } from "./Context/TutorsContext";
import TutorDetails from "./Pages/TutorDetail";
import AllTutors from "./Pages/TutorsPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const tutors = [
    {
      id: 0,
      name: "John Doe",
      subject: "Mathematics Expert",
      description: "Specialist in calculus, algebra, and exam prep.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      name: "Jane Smith",
      subject: "Physics Specialist",
      description: "Simplifies physics concepts with practical examples.",
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <TutorsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/AboutUs" element={<About />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/OurServices" element={<Services />}></Route>
          <Route path="/Testimonials" element={<Testimonials />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
          <Route path="/tutors" element={<AllTutors tutors={tutors} />} />
          <Route
            path="/tutors/:id"
            element={<TutorDetails tutors={tutors} />}
          />

          <Route path="/Signin" element={<SignInPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </TutorsProvider>
  );
}

export default App;
