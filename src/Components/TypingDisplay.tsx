import { useEffect, useState } from "react";

const TypingEffect = () => {
  const fullText = "Weelcome to Planet Tutors!";
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Speed of typing in milliseconds

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Clean up on unmount
  }, []);

  return <h1 className="typing-effect">{displayedText}</h1>;
};

export default TypingEffect;
