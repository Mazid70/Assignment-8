const AboutUs = () => {
  return (
    <div className="container flex items-center justify-center bg-gray-100">
      <div className="container px-8 py-12  shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4">About Book Vibe</h2>
        <p className="text-gray-700 mb-8">
          Welcome to Book Vibe, where reading meets passion! At Book Vibe, we
          are dedicated to providing a vibrant platform for book lovers to
          explore, discover, and connect with their favorite reads.
        </p>
        <div className="mt-4 text-gray-700">
          <p>
            Our team at Book Vibe is composed of avid readers, writers, and
            literary enthusiasts who share a common goal: to foster a love for
            literature and storytelling. We curate an extensive collection of
            books across genres, from timeless classics to contemporary
            bestsellers.
          </p>
          <p className="mt-2">
            Whether you are seeking an immersive fantasy world, a heartwarming
            romance, or thought-provoking non-fiction, Book Vibe has something
            for every reader. Our user-friendly platform allows you to browse,
            purchase, and review books with ease.
          </p>
          <p className="mt-2">
            Join our community of bookworms and bibliophiles as we embark on
            literary journeys together. Dive into new worlds, engage in lively
            discussions, and discover the magic of storytelling with Book Vibe.
          </p>
          <div className="mt-8 border-t pt-6 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Contact Book Vibe</h3>
            <p className="text-gray-700 mb-2">Email: contact@bookvibe.com</p>
            <p className="text-gray-700 mb-2">Phone: +1 (123) 456-7890</p>
            <p className="text-gray-700 mb-2">
              Address: 123 Main Street, Cityville, State, Country
            </p>
            <p className="text-gray-700 mb-2">
              Business Hours: Monday - Friday, 9:00 AM - 5:00 PM
            </p>
          </div>
          <div className="mt-8 border-t pt-6 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">More Information</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Explore thousands of ebooks in various languages.</li>
              <li>Join book clubs and participate in virtual events.</li>
              <li>Read and write reviews to share your thoughts.</li>
              <li>Discover recommendations tailored to your preferences.</li>
              <li>Enjoy seamless synchronization across devices.</li>
              <li>
                Access exclusive content and deals with our membership program.
              </li>
            </ul>
          </div>
          <div className="mt-8 border-t pt-6 border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Featured Content</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="text-lg font-semibold mb-2">
                  Book of the Month
                </h4>
                <p className="text-gray-700">
                  Discover our top pick for this month is must-read book.
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View Now
                </button>
              </div>
              <div className="border border-gray-200 p-4 rounded-md">
                <h4 className="text-lg font-semibold mb-2">Author Spotlight</h4>
                <p className="text-gray-700">
                  Learn more about the talented author behind the latest
                  bestseller.
                </p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  Read Interview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
