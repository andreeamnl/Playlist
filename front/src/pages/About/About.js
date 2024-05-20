import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  // Check if the token exists in localStorage
  const token = localStorage.getItem('token');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">What is this?</h1>
      {token ? (
        <>
          <p>Welcome, user.</p>
          <p>Playlistify is a music application that allows you to shuffle your daily playlist effectively.</p>
          {/* Display the "See Playlist" link */}
          <Link to="/playlist" className="text-teal font-semibold mt-4 inline-block">See Playlist</Link>
        </>
      ) : (
        <>
          <p>Please log in to access your playlist.</p>
          {/* Add a button to navigate to the login endpoint */}
          <Link to="/login" className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded mt-4 inline-block">
            Log In
          </Link>
        </>
      )}
    </div>
  );
};

export default About;
