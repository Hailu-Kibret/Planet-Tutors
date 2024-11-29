function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2 inline-block rounded">
            Contact Us
          </h2>
        </div>
        <p className="mb-8 text-gray-700">
          We'd love to hear from you! Reach out to us using the information
          below.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left Column: Contact Information */}
          <div className="contact-info w-full md:w-1/2 mx-4 mb-6 p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="mb-4">
              <h4 className="font-semibold">Phone:</h4>
              <p className="text-gray-700">
                <a
                  href="tel:+1234567890"
                  className="text-blue-500 hover:underline"
                >
                  09-39-21-49-32
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Email:</h4>
              <p className="text-gray-700">
                <a
                  href="mailto:planet.tutors@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  planet.tutors@gmail.com
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Address:</h4>
              <p className="text-gray-700">4 Kilo, Addis Ababa, Ethiopia</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form w-full md:w-1/2 mx-4 mb-6 p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <form>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  id="phone"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                className="bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 transition"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
