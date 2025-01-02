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

function FeaturedTutors({ tutors }: Props) {
  const featuredTutors = tutors.slice(0, 4); // Display first 4 as featured tutors

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="inline-block text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2 rounded">
          Featured Tutors
        </h2>
        <p className="text-gray-600">Meet some of our best tutors.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-4">
        {featuredTutors.map((tutor, index) => (
          <div
            key={tutor.id}
            className="bg-gray-100 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{tutor.name}</h3>
            <p className="text-blue-600">{tutor.subject}</p>

            {/* Button to Tutor Detail page with modified id */}
            <Link to={`/tutors/${tutor.id - 1}`}>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-200">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* Button to All Tutors page (outside the loop) */}
      <div className="text-center mt-8">
        <Link to="/tutors">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
            All Tutors
          </button>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedTutors;
