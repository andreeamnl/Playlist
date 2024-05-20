import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddSong = () => {
  const [songName, setSongName] = useState('');
  const [artist, setArtist] = useState('');
  const [addedSong, setAddedSong] = useState(null); // State to store the added song details

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/addsong', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: songName, artist: artist }), // Correct field names
      });
      if (!response.ok) {
        throw new Error('Failed to add song, maybe it already exists in the playlist!');
      }
      const data = await response.json(); // Parse JSON response
      setAddedSong(data); // Update state with added song details
      console.log('Song added successfully:', data);
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Add Song</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="songName" className="block text-gray-700 font-bold mb-2">Song Name</label>
          <input
            type="text"
            id="songName"
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="artist" className="block text-gray-700 font-bold mb-2">Artist</label>
          <input
            type="text"
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded">Add Song</button>
      </form>

      {/* Display added song details */}
      {addedSong && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">You successfully added</h2>
          <p>{addedSong.title}</p>
          <p>by</p>
          <p>{addedSong.artist}</p>
        </div>
      )}


      {/* See Playlist link */}
      <div className="mt-4">
        <Link to="/playlist" className="text-teal font-semibold mt-4 inline-block">See Playlist</Link>
      </div>
    </div>
  );
};

export default AddSong;
