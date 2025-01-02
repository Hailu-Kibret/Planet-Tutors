import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Format phone number
    if (name === "phoneNumber") {
      const formattedValue = formatPhoneNumber(value);
      setContactData({ ...contactData, [name]: formattedValue });
    } else {
      setContactData({ ...contactData, [name]: value });
    }

    // Clear error message on change
    setErrors({ ...errors, [name]: "" });
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");

    // Check if the number needs a leading '0'
    if (digits.length >= 10) {
      // Prepend a '0' if it starts with '7' or '9' and is 9 digits long
      if (
        (digits.startsWith("7") || digits.startsWith("9")) &&
        digits.length === 9
      ) {
        value = "0" + digits; // Add leading 0
      }

      // Format the number
      return value.replace(
        /^(0[79])(\d{2})(\d{2})(\d{2})(\d{2})$/,
        "$1-$2-$3-$4-$5"
      );
    }

    return value;
  };

  const validateFullName = (name: string) => {
    const nameRegex = /^[^\d]+$/; // No digits allowed
    return nameRegex.test(name);
  };

  const validatePhoneNumber = (phone: string) => {
    // Check if phone starts with 0, 7, or 9 and has 10 digits
    return (
      /^[0-9]{10}$/.test(phone.replace(/-/g, "")) &&
      (phone.startsWith("0") || phone.startsWith("7") || phone.startsWith("9"))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    const newErrors = {
      fullName: "",
      phoneNumber: "",
    };

    if (!validateFullName(contactData.fullName)) {
      newErrors.fullName = "Please enter a valid name";
      hasError = true;
    }

    if (!validatePhoneNumber(contactData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid Phone number";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/contact",
        contactData
      );
      if (response.data.success) {
        alert("Your message has been sent!");
        setContactData({ fullName: "", phoneNumber: "", message: "" });
      } else {
        alert("There was an error sending your message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("There was an error sending your message.");
    }
  };

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
                <a href="tel:+1234567890" className="text-blue-500">
                  09-39-21-49-32
                </a>
              </p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Email:</h4>
              <p className="text-gray-700">
                <a
                  href="mailto:planet.tutors@gmail.com"
                  className="text-blue-500"
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="name"
                  name="fullName"
                  value={contactData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="tel"
                  id="phone"
                  name="phoneNumber"
                  value={contactData.phoneNumber}
                  onChange={handleChange}
                  placeholder="09-00-97-31-00"
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-left mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="message"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
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
};

export default Contact;
