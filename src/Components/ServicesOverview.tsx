// import HomeImage from "../assets/images/pexels-mikhail-nilov-8923029.jpg";
// import onlineImage from "../assets/images/pexels-mikhail-nilov-8923029.jpg";
// import mpcImage from "../assets/images/pexels-mikhail-nilov-8923043.jpg";
// import oneImage from "../assets/images/pexels-mikhail-nilov-8923043.jpg";

function ServicesOverview() {
  return (
    <section className="py-12 bg-gray-100">
      {/* Section Title */}
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2 inline-block rounded">
          Our Tutoring Services
        </h2>
      </div>

      {/* Description */}
      <p className="text-lg text-center mb-10 px-4 md:px-12 lg:px-36">
        At Planet Tutors, we offer a range of educational services tailored to
        meet the unique needs of each student.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Service Card */}
        {[
          {
            title: "Home to Home Tutoring",
            description:
              "Our home tutoring service provides personalized, one-on-one support for your children directly at your location. If you have any concerns about your child's progress, you can cancel the service within the first week at no cost.",
          },
          {
            title: "Online Tutoring",
            description:
              "We offer online tutoring services, available as one-on-one sessions or group classes. Our tutors ensure progress by providing the same level of personalized attention as our home tutoring.",
          },
          {
            title: "MPC MasterClass",
            description:
              "This program focuses on Mathematics, Physics, and Chemistry for students who find these subjects challenging. Our tutors are experts with outstanding scores in these subjects.",
          },
          {
            title: "One Time Service",
            description:
              "This on-demand tutoring service is designed to help students with specific topics, homework, or assignments. Available whenever you need quick, focused assistance.",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              {service.title}
            </h3>
            <p className="mb-6 text-justify text-gray-700 leading-relaxed">
              {service.description}
            </p>
            <button
              type="button"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition duration-200"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Closing Statement */}
      <p className="text-lg text-center mt-10 px-4 md:px-12 lg:px-36">
        Join us at Planet Tutors, where we strive to provide exceptional
        tutoring services that empower students to reach their full potential.
      </p>
    </section>
  );
}

export default ServicesOverview;
