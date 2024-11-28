function Choose() {
  return (
    <section className="py-10 bg-white ">
      {/* Section Title */}
      <div className="flex justify-center">
        <h2 className="inline-block text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2">
          Why Choose Planet Tutors?
        </h2>
      </div>

      {/* Section Content */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Description */}
        <p className="text-lg text-center mb-10 text-gray-700">
          Discover the unique advantages that set us apart from other tutoring
          services.
        </p>

        {/* Features Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Experienced Tutors",
              description:
                "Our tutors are highly qualified and have a proven track record of success.",
            },
            {
              title: "Personalized Learning",
              description:
                "We tailor our tutoring sessions to meet the unique needs of each student.",
            },
            {
              title: "Flexible Scheduling",
              description:
                "Our tutors offer flexible scheduling to accommodate your busy life.",
            },
            {
              title: "Affordable Rates",
              description:
                "We provide quality education at competitive prices.",
            },
          ].map((feature, index) => (
            <li
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Statement */}
      <p className="text-lg text-center mt-10 text-gray-700">
        Join us and experience the difference with Planet Tutors!
      </p>
    </section>
  );
}

export default Choose;
