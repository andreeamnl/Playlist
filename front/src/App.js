import React, { useState , useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';
import Playlist from './components/Playlist/Playlist';
import Footer from './components/Footer/Footer';
import Addsong from './components/AddSong/Addsong';
import DeleteSong from './components/DeleteSong/DeleteSong';
import About from './pages/About/About';
import Login from './pages/Login/Login'
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    const accessToken = localStorage.getItem('token');
    if (accessToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
    const intervalId = setInterval(() => {
      checkLoginStatus();
    }, 5000); 
    return () => clearInterval(intervalId);
  },[]);

  return (
    <Router>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/SpotifyAPITest" element={isLoggedIn ?<Playlist /> : <Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/addsong" element={<Addsong />} />
          <Route path="/deletesong" element={<DeleteSong />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/login" element={<Login />} />


        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;


// function App() {
//   const [showAbout, setShowAbout] = useState(false);

//   const toggleAbout = () => {
//     setShowAbout(prevState => !prevState);
//   };
 
//   return (
//     <div className="App">
//       <Navbar toggleAbout={toggleAbout} />
//       {showAbout && <About />}
//       <Playlist />
//       <Login />
//       <Footer />
//     </div>
//   );
// }

// export default App;
