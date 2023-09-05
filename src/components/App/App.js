import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
// import HeaderWhite from '../Header/Header_white/Header_white';
// import SavedMovies from '../SavedMovies/SavedMovies';
// import Profile from '../Profile/Profile';
// import SignIn from '../Login/Login';
// import SignUp from '../Register/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies />
            </>
          }
        />
      </Routes>
      <Footer />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes> */}
    </div>
  );
}

export default App;
