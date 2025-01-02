import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface Tutor {
  name: string;
  subject: string;
  experience: number;
  rating: number;
  bio: string;
}

const AddTutor: React.FC = () => {
  const [tutor, setTutor] = useState<Tutor>({
    name: "",
    subject: "",
    experience: 0,
    rating: 0,
    bio: "",
  });

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTutor({ ...tutor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/Tutors", tutor);
      console.log("Tutor added:", response.data);
      setTutor({ name: "", subject: "", experience: 0, rating: 0, bio: "" });
      navigate("/tutors"); // Redirect to the tutor list after submission
    } catch (error) {
      console.error("Error adding tutor:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={tutor.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={tutor.subject}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="experience"
          placeholder="Experience (years)"
          value={tutor.experience}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (out of 5)"
          value={tutor.rating}
          onChange={handleChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={tutor.bio}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add Tutor</button>
      </form>
    </div>
  );
};

export default AddTutor;
