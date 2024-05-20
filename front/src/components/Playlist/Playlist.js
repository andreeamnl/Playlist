import React, { useState, useEffect } from 'react';
import Song from '../Song/Song';
import Shuffle from '../Shuffle/Shuffle';
import Unlog from '../Unlog/Unlog';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Playlist = () => {
    const [playlist, setPlaylist] = useState([]);

    const handleShuffle = (shuffledPlaylist) => {
        setPlaylist(shuffledPlaylist);
    };

    const handleLike = (updatedPlaylist) => {
        setPlaylist(updatedPlaylist);
        localStorage.setItem('playlist', JSON.stringify(updatedPlaylist));
    };

    useEffect(() => {
        const fetchPlaylist = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/songs');
                if (!response.ok) {
                    throw new Error('Failed to fetch playlist');
                }
                const songsData = await response.json();
                setPlaylist(songsData);
                localStorage.setItem('playlist', JSON.stringify(songsData));
                console.log("fetched");
            } catch (error) {
                console.error('Error fetching playlist:', error);
            }
        };

        fetchPlaylist();
    }, []);

    return (
        <>
            <div className="playlist bg-lightTeal text-black p-4 rounded-lg shadow-lg w-3/4 mx-auto" style={{ marginBottom: '1rem' }}> {/* Adjusted inline style for margin bottom */}
                <h2 className="text-3xl font-semibold text-teal mb-4 font-cursive">
                    My Daily Playlist
                </h2>
                <div className="flex justify-center mb-4">
                    <Shuffle onShuffle={handleShuffle} className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded" />
                </div>
                <div className="flex justify-center">
                    <Link to="/addsong" className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 mr-2 rounded">Add Song</Link>
                    <Link to="/deletesong" className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded">Delete Song</Link>
                </div>
                <ul>
                    {playlist.map((song, index) => (
                        <Song
                            key={song.id}
                            title={song.title}
                            artist={song.artist}
                            duration={song.duration}
                            className="mb-4"
                            onHandleLike={handleLike}
                        />
                    ))}
                </ul>
            </div>
            <Unlog />
        </>
    );
};

export default Playlist;
