import React from "react";

const Resources: React.FC = () => {
  const resources = [
    {
      category: "Online Learning Platforms",
      items: [
        {
          name: "Khan Academy",
          description:
            "Free online courses, lessons, and practice in various subjects.",
          link: "https://www.khanacademy.org",
        },
        {
          name: "Coursera",
          description:
            "Access courses from top universities and companies worldwide.",
          link: "https://www.coursera.org",
        },
        {
          name: "edX",
          description:
            "Learn new skills with free online courses from top institutions.",
          link: "https://www.edx.org",
        },
      ],
    },
    {
      category: "Study Tools",
      items: [
        {
          name: "Quizlet",
          description:
            "Create and practice flashcards for a variety of subjects.",
          link: "https://www.quizlet.com",
        },
        {
          name: "Grammarly",
          description:
            "Improve your writing with grammar and spell-checking tools.",
          link: "https://www.grammarly.com",
        },
        {
          name: "Wolfram Alpha",
          description:
            "A computational engine to solve math, science, and engineering problems.",
          link: "https://www.wolframalpha.com",
        },
      ],
    },
    {
      category: "Student Tips and Guides",
      items: [
        {
          name: "Time Management for Students",
          description:
            "Learn how to manage your time effectively to balance studies and life.",
          link: "https://www.oxbridgeessays.com/blog/top-time-management-tips-students/",
        },
        {
          name: "Effective Study Techniques",
          description:
            "Explore scientifically proven study techniques for better learning.",
          link: "https://www.verywellmind.com/effective-study-techniques-2796098",
        },
        {
          name: "Note-Taking Methods",
          description:
            "Discover the best note-taking methods for different learning styles.",
          link: "https://collegeinfogeek.com/how-to-take-notes-in-college/",
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-2 border-blue-600 pb-2 rounded">
            Resouces
          </h2>
        </div>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Explore a curated list of resources to support your learning journey
          with Planet Tutors.
        </p>
        {resources.map((category, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {category.category}
            </h2>
            <ul className="space-y-4">
              {category.items.map((item, idx) => (
                <li
                  key={idx}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline"
                  >
                    Visit {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
