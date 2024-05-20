import React from 'react';
import { useState, useEffect } from 'react';

import Like from '../Like/Like'; // Make sure to import the Like component

const Song = ({ id, title, artist, duration , HandleLike}) => {
  useEffect(() => {
    console.log({ id, title, artist, duration });
  }, [id, title, artist, duration, ]);

  return (
    <li className="flex items-center py-3 px-4 hover:bg-hoverGray transition duration-300 ease-in-out">
        <Like songId={id}  onHandleLike={HandleLike} />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-teal">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <p className="text-sm text-gray-500">{duration}</p>
    </li>
  );
};

export default Song;
