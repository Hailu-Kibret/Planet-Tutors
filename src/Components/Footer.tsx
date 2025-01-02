import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="footer-section w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            About Us
          </h3>
          <p>
            At Planet Tutors, we are exceptional team from Addis Ababa
            University who give home to home or online tutor with a fair price.
            We give quality tutor from KG-12.
          </p>
        </div>

        <div className="footer-section w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            Links
          </h3>
          <ul>
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white"
                onClick={scrollToTop}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-gray-400 hover:text-white"
                onClick={scrollToTop}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/OurServices"
                className="text-gray-400 hover:text-white"
                onClick={scrollToTop}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-gray-400 hover:text-white"
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section w-full md:w-auto text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            Follow Us
          </h3>
          <br />
          <Link
            to="https://web.facebook.com/profile.php?id=61564120752449"
            target="_blank"
            className="text-gray-400 hover:text-white"
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

        <div className="footer-section w-full md:w-auto text-center md:text-left">
          <h3 className="font-bold text-lg mb-4 border-b-2 inline-block">
            Contact Us
          </h3>
          <p>
            Email:{" "}
            <Link
              to="mailto:planet.tutors@gmail.com"
              className="text-gray-400 hover:text-white "
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
              @Planet_tutoring
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
