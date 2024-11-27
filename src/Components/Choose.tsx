function Choose() {
  return (
    <section className="py-10 bg-white">
      <div className="flex justify-center">
        <h2 className=" inline-block text-3xl font-bold text-blue-600 text-center mb-6 border-b-2 border-blue-600 pb-2 rounded">
          Why Choose Planet Tutors?
        </h2>
      </div>

      <div className=" max-w-screen-xl mx-auto">
        <p className="text-lg text-center mb-6">
          Discover the unique advantages that set us apart from other tutoring
          services.
        </p>

        <ul className="grid grid-cols-2 justify-center gap-4 text-center">
          <li className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Experienced Tutors</h3>
            <p className="text-gray-700">
              Our tutors are highly qualified and have a proven track record of
              success.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">
              Personalized Learning
            </h3>
            <p className="text-gray-700">
              We tailor our tutoring sessions to meet the unique needs of each
              student.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-700">
              Our tutors offer flexible scheduling to accommodate your busy
              life.
            </p>
          </li>
          <li className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p className="text-gray-700">
              We provide quality education at competitive prices.
            </p>
          </li>
        </ul>
      </div>

      <p className="text-lg text-center mt-6">
        Join us and experience the difference with Planet Tutors!
      </p>
    </section>
  );
}

export default Choose;
