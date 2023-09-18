// branch ready
import { useState } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import NavMenu from '../NavMenu/NavMenu';

function App() {
  const [
    isNavMenuOpen,
    setIsNavMenuOpen,
  ] = useState(null);

  const closeNavMenu = () =>
    setIsNavMenuOpen(null);

    
  return (
    <div className="App">
      <Header
        onClick={setIsNavMenuOpen}
      />
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
      <NavMenu
        isOpen={isNavMenuOpen}
        onClose={closeNavMenu}
      />
    </div>
  );
}

export default App;
