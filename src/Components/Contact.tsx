function Contact() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-2 border-blue-600 pb-2 rounded">
            Contact Us
          </h2>
        </div>
        <p className="mb-8 text-gray-700">
          We'd love to hear from you! Reach out to us using the information
          below.
        </p>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="contact-info mx-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p>
              <a
                href="mailto:info@example.com"
                className="text-blue-500 no-underline"
              >
                planet.tutors@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info mx-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p>
              <a href="tel:+1234567890" className="text-blue-500 no-underline ">
                09-39-21-49-32
              </a>
            </p>
          </div>
          <div className="contact-info mx-4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p>4 Kilo, Addis Ababa, Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
