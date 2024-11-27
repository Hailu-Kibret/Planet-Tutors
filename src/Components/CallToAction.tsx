import { Link } from "react-router-dom";
function CallToAction() {
  return (
    <section className="bg-gray-100 py-12 text-white text-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-2 border-blue-600 pb-2 rounded">
            Get Started Today!
          </h2>
        </div>
        <p className="mb-6 text-black">
          Ready to provide your child with the best tutoring experience? Sign up
          now to get started!
        </p>
        <button type="submit" className="button-solid">
          <Link className="no-underline" to="/signup">
            Sign Up Now
          </Link>
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
