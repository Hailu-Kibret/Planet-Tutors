import React from "react";
import { useParams } from "react-router-dom";

type Tutor = {
  id: number;
  name: string;
  subject: string;
  description: string;
  image: string;
};

interface Props {
  tutors: Tutor[];
}

const TutorDetails: React.FC<Props> = ({ tutors }) => {
  const { id } = useParams<{ id: string }>();
  const tutor = tutors.find((t) => t.id === parseInt(id || "0"));

  if (!tutor) {
    return <p className="p-8 text-red-500">Tutor not found.</p>;
  }

  return (
    <section className="p-8">
      <div className="flex flex-col items-center">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-48 h-48 rounded-full border-4 border-blue-600"
        />
        <h1 className="text-3xl font-bold mt-4">{tutor.name}</h1>
        <h2 className="text-xl text-gray-700">{tutor.subject}</h2>
        <p className="mt-4 text-gray-600 text-center">{tutor.description}</p>
      </div>
    </section>
  );
};

export default TutorDetails;
