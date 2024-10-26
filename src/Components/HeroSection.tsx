import tutoringImage from "../assets/images/pexels-mikhail-nilov-8923029.jpg";
import TypingEffect from "./TypingDisplay";
function HeroSection() {
  return (
    <div className="flex flex-1 justify-center items-center gap-20  pt-12 pb-12 pl-5 pr-5 ">
      <div className="w-3/4">
        <div className=" text-4xl leading-tight mb-5">
          <TypingEffect />
        </div>

        <h2 className="text-blue-600 text-3xl font-semibold my-4   leading-snug mb-4">
          Exceptional tutoring for your child's success!
        </h2>
        <p className="text-base leading-relaxed mb-7">
          We are a group of exceptional graduate and undergraduate students from
          Addis Ababa University, each scoring at least 550/700 on the entrance
          exam and maintaining a CGPA of 3.5 or higher. Our mission is to
          provide your child with exceptional tutoring while also teaching
          effective study skills and strategies to become a smart, successful
          student. Trust us, we are different!
        </p>
        <button
          className="text-base px-5 py-2 bg-primary-color text-white rounded cursor-pointer hover:bg-secondary-color"
          type="submit"
        >
          Get Started
        </button>
      </div>
      <div>
        <img
          className="rounded"
          width={650}
          src={tutoringImage}
          alt="hero section image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
