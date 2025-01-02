import React, { createContext, useContext } from "react";

type Tutor = {
  id: number;
  name: string;
  subject: string;
  description: string;
  image: string;
};

const tutors: Tutor[] = [
  {
    id: 0,
    name: "John Doe",
    subject: "Mathematics Expert",
    description: "Specialist in calculus, algebra, and exam prep.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    name: "Jane Smith",
    subject: "Physics Specialist",
    description: "Simplifies physics concepts with practical examples.",
    image: "https://via.placeholder.com/150",
  },
];

const TutorsContext = createContext<Tutor[]>([]);

export const TutorsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <TutorsContext.Provider value={tutors}>{children}</TutorsContext.Provider>
  );
};

export const useTutors = () => useContext(TutorsContext);
