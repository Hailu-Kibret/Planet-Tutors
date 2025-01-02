import React from "react";
import { Link } from "react-router-dom";

type Tutor = {
  id: number;
  name: string;
  subject: string;
  image: string;
};

interface Props {
  tutors: Tutor[];
}

const AllTutors: React.FC<Props> = ({ tutors }) => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Tutors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h2 className="text-xl font-semibold mt-2">{tutor.name}</h2>
            <p className="text-gray-600">{tutor.subject}</p>
            <Link
              to={`/tutors/${tutor.id}`}
              className="text-blue-600 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllTutors;
