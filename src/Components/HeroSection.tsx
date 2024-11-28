import tutoringImage from "../assets/images/hero-image.png";
import TypingEffect from "./TypingDisplay";

function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 lg:gap-20 pt-12 pb-12 px-5">
      {/* Text Section */}
      <div className="w-full lg:w-3/4">
        {/* Typing Effect */}
        <div className="text-3xl sm:text-4xl leading-tight mb-5 text-center lg:text-left">
          <TypingEffect />
        </div>

        {/* Headline */}
        <h2 className="text-blue-600 text-2xl sm:text-3xl font-semibold my-4 leading-snug text-center lg:text-left">
          Exceptional tutoring for your child's success!
        </h2>

        {/* Description */}
        <p className="text-base leading-relaxed mb-7 text-justify text-gray-700">
          We are a group of exceptional graduate and undergraduate students from
          Addis Ababa University, each scoring at least 550/700 on the entrance
          exam and maintaining a CGPA of 3.5 or higher. Our mission is to
          provide your child with exceptional tutoring while also teaching
          effective study skills and strategies to become a smart, successful
          student. Trust us, we are different!
        </p>

        {/* Button */}
        <div className="text-center lg:text-left">
          <button
            className="button-solid text-base px-5 py-2 bg-primary-color text-white rounded cursor-pointer hover:bg-secondary-color"
            type="submit"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-auto flex justify-center">
        <img
          className="rounded opacity-90 max-w-full h-auto"
          src={tutoringImage}
          alt="hero section image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
