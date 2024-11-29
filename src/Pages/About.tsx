import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2 rounded">
            About Us
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed mb-8 text-lg text-center">
          Welcome to Planet Tutors!
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Planet Tutors, we believe that education should be a journey filled
          with discovery, inspiration, and growth. Our mission is to provide
          personalized tutoring services that empower students to achieve their
          academic goals and unlock their full potential.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Founded by a team of passionate educators and learners, Planet Tutors
          is dedicated to creating a supportive and engaging learning
          environment. Our tutors come from diverse backgrounds and fields of
          expertise, ensuring that we can cater to a wide range of subjects and
          learning styles.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Philosophy
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We understand that every student is unique. That's why we take the
          time to assess individual needs and customize our tutoring approaches
          accordingly. Our philosophy centers around:
        </p>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8">
          <li>
            <strong>Personalized Learning:</strong> Tailored lesson plans that
            match each student's pace and learning style.
          </li>
          <li>
            <strong>Encouragement and Support:</strong> Building confidence
            through positive reinforcement and constructive feedback.
          </li>
          <li>
            <strong>Holistic Development:</strong> Fostering not just academic
            skills but also critical thinking, problem-solving, and a love for
            learning.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8">
          <li>
            <strong>One-on-One Tutoring:</strong> Personalized sessions that
            focus on specific subjects, homework help, or exam preparation.
          </li>
          <li>
            <strong>Group Sessions:</strong> Collaborative learning experiences
            that encourage peer interaction and teamwork.
          </li>
          <li>
            <strong>Online Tutoring:</strong> Flexible and convenient options
            for students to learn from the comfort of their homes.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Commitment
        </h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          At Planet Tutors, we are committed to academic excellence and
          continuous improvement. We regularly evaluate our tutoring methods and
          seek feedback from students and parents to ensure we are meeting their
          needs effectively. Our goal is to foster a lifelong love of learning
          and equip students with the skills they need to thrive in their
          educational journeys.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Whether you're looking to boost your grades, master a new subject, or
          simply explore new areas of interest, Planet Tutors is here to help.
          Join us on this exciting journey of learning and discovery!
        </p>
        <p className="text-gray-700 leading-relaxed">
          For more information about our services or to schedule a session,
          please contact us today. Together, we can reach for the stars!
        </p>
      </div>
    </section>
  );
};

export default About;
