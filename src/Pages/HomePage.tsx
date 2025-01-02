import CallToAction from "../Components/CallToAction";
import Choose from "../Components/Choose";
import HeroSection from "../Components/HeroSection";
import ServicesOverview from "../Components/ServicesOverview";
import BlogSection from "../Components/BlogSection";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";
import FeaturedTutors from "../Components/FeaturedTutors";
import AddTutor from "../Components/AddTutors";
import TutorList from "../Components/TutorList";

function HomePage() {
  const tutors = [
    {
      id: 1,
      name: "John Doe",
      subject: "Mathematics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      subject: "Physics",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Michael Brown",
      subject: "Chemistry",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Johnson",
      subject: "English",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "David Lee",
      subject: "Biology",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      {/*  <AddTutor /> */}
      <TutorList />
      <FeaturedTutors tutors={tutors} />
      <Choose />
      <Testimonials />
      <CallToAction />
      <BlogSection />
      <Contact />
    </div>
  );
}

export default HomePage;
