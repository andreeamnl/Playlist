import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-4">
      <p className="text-teal text-sm">&copy; {new Date().getFullYear()} Playlistify</p>
      <p className="text-gray-500 text-xs">Designed with ❤️ by Andreea</p>
    </footer>
  );
};

export default Footer;
