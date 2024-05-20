import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteSong = () => {
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [deletedSong, setDeletedSong] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/deletesong', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: songTitle, artist: songArtist }), // Use correct field names
      });
      if (!response.ok) {
        throw new Error('Failed to delete song');
      }
      const data = await response.json(); // Parse JSON response
      setDeletedSong(data); // Update state with deleted song details
      console.log('Song deleted successfully:', data);
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Delete Song</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="songTitle" className="block text-gray-700 font-bold mb-2">Song Title</label>
          <input
            type="text"
            id="songTitle"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="songArtist" className="block text-gray-700 font-bold mb-2">Artist</label>
          <input
            type="text"
            id="songArtist"
            value={songArtist}
            onChange={(e) => setSongArtist(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded">Delete Song</button>
      </form>

      {deletedSong && (
        <div className="mt-4">
          <p>Song is now Deleted
          </p>
        </div>
      )}
        {!deletedSong && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Unsuccesful</h2>
          <p>Song doesn't exist</p>
        </div>
      )}

      <div className="mt-4">
        <Link to="/playlist" className="text-teal font-semibold mt-4 inline-block">See Playlist</Link>
      </div>
    </div>
  );
};

export default DeleteSong;
