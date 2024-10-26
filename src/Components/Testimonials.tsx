function Testimonials() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-2 border-blue-600 pb-2 rounded">
            What Our Parents and Students Say
          </h2>
        </div>
        <p className="mb-8 text-gray-700">
          Hear from our community about their experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "The teachers are incredibly supportive and dedicated!"
            </p>
            <h3 className="font-semibold mt-4">— Hanamariyam, Parent</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "I’ve learned so much here; the environment is fantastic!"
            </p>
            <h3 className="font-semibold mt-4">— Yared, Student</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 italic">
              "A wonderful place for my child to grow and thrive!"
            </p>
            <h3 className="font-semibold mt-4">— Yenew, Parent</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
