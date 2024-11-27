import logo from "../assets/images/planet-tutors-high-resolution-logo-transparent (2).png";
import "../index.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex flex-col ">
      <div className="items-center flex justify-between bg-gray-800 text-white p-10">
        <div>
          <Link className="no-underline" to="/">
            {" "}
            <img src={logo} width={150} alt="Planet Tutors" />
          </Link>
        </div>
        <div>
          <ul className="items-center flex justify-between gap-8 pl-12 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Our Services</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Resources">Resources</Link>
            </li>
          </ul>
        </div>

        <button
          type="submit"
          className="flex justify-center bg-blue-500 p-2 rounded button-solid "
        >
          <Link className="text-white no-underline " to="/Signin">
            Sign in
          </Link>
        </button>
      </div>
      <div className="bg-tealCustom text-center">
        <h3 className="text-lg font-bold text-white p-2">
          <span className="animated-text">Call Us Now:</span> 09-39-21-49-32
        </h3>
      </div>
    </div>
  );
}

export default Header;
