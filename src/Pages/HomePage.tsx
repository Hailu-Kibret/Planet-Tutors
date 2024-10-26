import CallToAction from "../Components/CallToAction";
import Choose from "../Components/Choose";
import HeroSection from "../Components/HeroSection";
import ServicesOverview from "../Components/ServicesOverview";
import BlogSection from "../Components/BlogSection";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <Choose />
      <Testimonials />
      <CallToAction />
      <BlogSection />
      <Contact />
    </div>
  );
}

export default HomePage;
