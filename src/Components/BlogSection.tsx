function Blog() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6 border-b-4 border-blue-600 pb-2  inline-block  rounded  ">
            Latest Insights and Tips
          </h2>
        </div>
        <p className="mb-8 text-gray-700">
          Stay updated with our latest articles and helpful tips to enhance your
          knowledge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">
              How childrens shall study?
            </h3>
            <p className="text-gray-600 mb-4">
              A brief description or summary of the insight or tip goes here.
            </p>
            <button
              type="submit"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-200"
            >
              Learn More
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">
              High scorer students at Planet tutors
            </h3>
            <p className="text-gray-600 mb-4">
              A brief description or summary of the insight or tip goes here.
            </p>
            <button
              type="submit"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-200"
            >
              Learn More
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">
              Planet Tutors Anniversary!
            </h3>
            <p className="text-gray-600 mb-4">
              A brief description or summary of the insight or tip goes here.
            </p>
            <button
              type="submit"
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded bg-transparent hover:bg-blue-500 hover:text-white transition duration-200"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
