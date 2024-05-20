import React from 'react';

const Shuffle = ({ onShuffle }) => {
  const handleShuffle = () => {
    const playlist = JSON.parse(localStorage.getItem('playlist')) || [];

    const shuffledPlaylist = shuffleArray(playlist);
    localStorage.setItem('playlist', JSON.stringify(shuffledPlaylist));

    // Trigger the parent component's onShuffle function
    if (onShuffle) {
      onShuffle(shuffledPlaylist);
    }
  };

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <button onClick={handleShuffle} className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-teal">
      Shuffle
    </button>
  );
};

export default Shuffle;
