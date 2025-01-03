function Services() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2 rounded">
          Our Tutoring Services
        </h1>
      </div>

      <p className="text-lg text-center px-4 mb-6">
        At Planet Tutors, we offer a range of educational services tailored to
        meet the unique needs of each student.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 mx-auto max-w-screen-xl">
        <div className="text-center min-h-30 bg-white p-6 rounded-lg shadow">
          <h3 className="mb-2">Home to Home Tutoring</h3>
          <p className="mb-4 text-justify">
            Our home tutoring service provides personalized, one-on-one support
            for your children, directly at your location. Our tutors are
            dedicated to your child's academic success and overall development.
            We guide our tutors on effective teaching methods, ensuring they are
            skilled at making concepts easy to understand. If you have any
            concerns about your child's progress, you can cancel the service
            within the first week at no cost.
          </p>
        </div>
        <div className="text-center min-h-30 bg-white p-6 rounded-lg shadow">
          <h3 className="mb-2">Online Tutoring</h3>
          <p className="mb-4 text-justify">
            Additionally, we offer online tutoring services, available as
            one-on-one sessions or group classes. For group sessions, the cost
            per student decreases as the group size increases. Our online
            tutoring is conducted through platforms like Google Live or other
            live streaming tools, providing the same level of personalized
            attention as our home tutoring. We closely monitor your child's
            progress and occasionally visit in person to ensure their
            development. The cost for online tutoring is lower than on-site
            sessions, as there are no additional transportation expenses
            involved.
          </p>
        </div>
        <div className="text-center min-h-30 bg-white p-6 rounded-lg shadow">
          <h3 className="mb-2">MPC MasterClass</h3>
          <p className="mb-4 text-justify">
            We also offer a specialized service called MPC MasterClass, an
            online and on-site tutoring program focused exclusively on
            Mathematics, Physics, and Chemistry. This service is designed to
            support students who find these subjects challenging. Our MPC
            MasterClass tutors are experts who have achieved outstanding scores
            in these subjects, ensuring they provide high-quality assistance to
            help students succeed in these courses.
          </p>
        </div>
        <div className="text-center min-h-30 bg-white p-6 rounded-lg shadow">
          <h3 className="mb-2">One Time Service</h3>
          <p className="mb-4 text-justify">
            Lastly, we offer a one-time tutoring service designed to help
            students with specific topics, homework, assignments, or any
            challenging questions. This service provides live, online assistance
            to clarify concepts and ensure understanding. If a student is
            struggling with a particular topic, they can request a tutor at any
            time for a one-time session focused solely on that subject. As the
            name suggests, this is a flexible, on-demand service available
            whenever needed.
          </p>
        </div>
      </div>
      <div>
        <p className="text-lg text-center px-4 mt-6">
          Join us at Planet Tutors, where we strive to provide exceptional
          tutoring services that empower students to reach their full potential.
        </p>
      </div>
    </section>
  );
}

export default Services;
