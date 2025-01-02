import React, { useState, useEffect } from "react";
import axios from "axios";

interface Tutor {
  _id?: string;
  name: string;
  subject: string;
  experience: number;
  rating: number;
  bio: string;
}

const TutorList: React.FC = () => {
  const [tutors, setTutors] = useState<Tutor[]>([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Tutors");
        setTutors(response.data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    };

    fetchTutors();
  }, []);

  return (
    <div>
      <h1>Tutors</h1>
      {tutors.length > 0 ? (
        tutors.map((tutor) => (
          <div key={tutor._id}>
            <h2>{tutor.name}</h2>
            <p>Subject: {tutor.subject}</p>
            <p>Experience: {tutor.experience} years</p>
            <p>Rating: {tutor.rating}/5</p>
            <p>{tutor.bio}</p>
          </div>
        ))
      ) : (
        <p>No tutors available.</p>
      )}
    </div>
  );
};

export default TutorList;
