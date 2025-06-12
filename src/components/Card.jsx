import React, { useState, useRef } from "react";

const Card = ({
  video,
  image,
  title,
  date,
  subtitle,
  technologies = [], // Default to empty array if not provided
  link = "#", // Default link if not provided
  demoLink,
  sourceLink,
  timeline = "No timeline provided.",
  keyObjectives = [], // Default to empty array if not provided
  additionalDetails = "No additional details provided.",
}) => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset video to the start
    }
  };

  const toggleModal = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    setShowModal(!showModal);
  };

  return (
    <div
      className="m-4 block max-w-lg overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={link}
        className="relative block"
        aria-label={`View project: ${title}`}
        onClick={toggleModal} // Open modal instead of navigating
      >
        {video ? (
          <video
            ref={videoRef}
            className="w-full h-72 object-cover"
            src={video}
            alt={title}
            loop
            muted
            playsInline
          />
        ) : (
          <img className="w-full h-72 object-cover" src={image} alt={title} />
        )}
      </a>
      <div className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
        <h2 className="text-2xl font-extrabold mb-3">{title}</h2>
        <h3 className="text-lg mb-3 font-semibold opacity-90">{date}</h3>
        <p className="text-base font-medium mb-4">{subtitle}</p>
        <div className="flex flex-wrap space-x-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 text-sm font-medium bg-gray-900 text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-4 items-center">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-900 transition-colors duration-300"
            >
              Live Demo
            </a>
          )}
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors duration-300"
            >
              Source Code
            </a>
          )}
          <button
            onClick={toggleModal}
            className="text-white ml-4"
            aria-label={`More information about ${title}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h1m-1-4h.01M12 20h0a8 8 0 110-16 8 8 0 010 16z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div
            className="relative bg-red-900 bg-opacity-95 text-white p-8 rounded-lg w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on click inside
          >
            <button
              onClick={toggleModal}
              className="absolute top-1 left-1 text-white hover:text-gray-200 transition-colors duration-300"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h3 className="text-3xl font-semibold mb-6">{title}</h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-2">Project Timeline</h4>
              <p className="text-base mb-4">{timeline}</p>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-2">Key Objectives</h4>
              <ul className="list-disc pl-5 text-base mb-4">
                {(Array.isArray(keyObjectives)
                  ? keyObjectives
                  : [keyObjectives]
                ).map((objective, index) => (
                  <li key={index}>{objective}</li>
                ))}
              </ul>
            </div>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-2">Additional Details</h4>
              <p className="text-base">{additionalDetails}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
