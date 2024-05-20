import React, { useState } from 'react';
import LikedIcon from '../Like/LikedIcon.jsx';
import UnlikedIcon from '../Like/UnlikedIcon.jsx';

const Like = ({ songId , onHandleLike}) => {
  const [liked, setLiked] = useState(false);
  const playlist = JSON.parse(localStorage.getItem('playlist')) || [];

  const HandleLike =() => {
    const song = playlist.find(song => song.id === songId);
    console.log(song);
    
    if (song && song.liked) {
      setLiked(true);
      localStorage.setItem('playlist', JSON.stringify(playlist));  
    }

  }

  const toggleLiked = () => {
    setLiked(prevLiked => !prevLiked);
    HandleLike(playlist)
  };

  return (
    <div onClick={toggleLiked}>
      {liked ? <LikedIcon /> : <UnlikedIcon />}
    </div>
  );
};

export default Like;