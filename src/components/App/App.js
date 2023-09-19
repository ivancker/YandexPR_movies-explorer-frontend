import { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

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

import mainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] =
    useState({});
  const [
    isNavMenuOpen,
    setIsNavMenuOpen,
  ] = useState(null);
  const [loggedIn, setLoggedIn] =
    useState(false);

  const closeNavMenu = () =>
    setIsNavMenuOpen(null);

  function handleSignup({
    name,
    email,
    password,
  }) {
    // setIsLoader(true);
    mainApi
      .registerUser(
        name,
        email,
        password
      )
      .then((data) => {
        if (data._id) {
          handleLogin({
            email,
            password,
          });
        }
      })
      .catch(
        (err) => console.log(err)
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: false,
        //   text: err,
        // })
      )
      .finally(() =>
        console.log('@@@@@@')
      );
  }

  function handleLogin({
    email,
    password,
  }) {
    // setIsLoader(true);
    mainApi
      .login(email, password)
      .then((jwt) => {
        if (jwt.token) {
          localStorage.setItem(
            'jwt',
            jwt.token
          );
          setLoggedIn(true);
          navigate('/movies', {replace: true});
          // setIsInfoTooltip({
          //   isOpen: true,
          //   successful: true,
          //   text: 'Добро пожаловать!',
          // });
        }
      })
      .catch(
        (err) => console.log(err)
        // setIsInfoTooltip({
        //   isOpen: true,
        //   successful: false,
        //   text: err,
        // })
      )
      .finally(() =>
        console.log('$$$$$$$$')
      );
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider
        value={currentUser}
      >
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
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                />
                {/* <Movies /> */}
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
            element={
              <Login
                onLogin={handleLogin}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                onRegister={
                  handleSignup
                }
              />
            }
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
