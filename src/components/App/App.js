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
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
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
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
