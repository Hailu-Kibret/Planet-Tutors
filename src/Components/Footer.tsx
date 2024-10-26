import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="footer-section w-1/3">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            About Us
          </h3>
          <p>
            At Planet Tutors, we are dedicated to providing exceptional tutoring
            services for students from KG-12 and university levels. Our
            experienced tutors are committed to helping learners achieve their
            academic goals through personalized and engaging instruction.
            Whether you’re looking for support in foundational subjects or
            advanced coursework, we’re here to guide you every step of the way.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            Links
          </h3>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/Services" className="text-gray-400 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="font-bold text-lg mb-4 border-b-2 ">Follow Us</h3>
          <Link
            to="https://web.facebook.com/profile.php?id=61564120752449"
            target="_blank"
            className=" text-gray-400 hover:text-white"
          >
            Facebook
          </Link>
          <br />
          <Link
            to="https://www.tiktok.com/@planet_tutors?_t=8qovUh3RfIE"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            TikTok
          </Link>
          <br />
          <Link
            to="https://t.me/planet_tutors"
            target="_blank"
            className="text-gray-400 hover:text-white"
          >
            Telegram
          </Link>
        </div>

        <div className="footer-section">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <Link
              to="mailto:planet.tutors@gmail.com"
              className="text-gray-400 hover:text-white"
            >
              planet.tutors@gmail.com
            </Link>
          </p>
          <p>
            Phone:{" "}
            <Link
              to="tel:+1234567890"
              className="text-gray-400 hover:text-white"
            >
              09-39-21-49-32
            </Link>
          </p>
          <p>
            Telegram:{" "}
            <Link
              to="https://t.me/we_teach4"
              className="text-gray-400 hover:text-white"
            >
              @we_teach4
            </Link>
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {date.getFullYear()} Planet Tutors. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
