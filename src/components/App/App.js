import React, {
  useState,
  useEffect,
} from 'react';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom';
import {
  registerUser,
  loginUser,
  getUserInfo,
  getApiContent,
  createMovie,
  fetchMovies,
  deleteMovie as deleteSavedMovie,
} from '../../utils/MainApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import {
  errorMessages,
  successMessages,
  TABLET_SCREEN_WIDTH,
  MOBILE_SCREEN_WIDTH,
} from '../../utils/constants';

import Footer from '../Footer/Footer';
import Main from '../Landing/Landing';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Menu from '../Menu/Menu';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] =
    useState({});
  const [
    isMenuActive,
    setIsMenuActive,
  ] = useState(false);
  const [isTablet, setIsTablet] =
    useState(
      window.innerWidth <=
        TABLET_SCREEN_WIDTH
    );
  const [isMobile, setIsMobile] =
    useState(
      window.innerWidth <=
        MOBILE_SCREEN_WIDTH
    );
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [
    isTooltipOpen,
    setIsTooltipOpen,
  ] = useState(false);
  const [
    errorMessage,
    setErrorMessage,
  ] = useState('');
  const [
    successMessage,
    setSuccessMessage,
  ] = useState('');

  const [movies, setMovies] = useState(
    []
  );
  const [isLoading, setIsLoading] =
    useState(false);

  const [
    filteredMovies,
    setFilteredMovies,
  ] = useState([]);
  const [savedMovies, setSavedMovies] =
    useState([]);
  const [
    filteredSavedMovies,
    setFilteredSavedMovies,
  ] = useState([]);
  const [likedMovies, setLikedMovies] =
    useState([]);
  const [
    isActionPending,
    setIsActionPending,
  ] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const footerCondition =
    pathname === '/movies' ||
    pathname === '/saved-movies' ||
    pathname === '/';

  const handleResize = () => {
    setIsTablet(
      window.innerWidth <=
        TABLET_SCREEN_WIDTH
    );
    setIsMobile(
      window.innerWidth <=
        MOBILE_SCREEN_WIDTH
    );
  };

  useEffect(() => {
    window.addEventListener(
      'resize',
      handleResize
    );

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      getUserInfo().then((res) =>
        setCurrentUser({
          email: res.email,
          name: res.name,
        })
      );
    }
  }, [isLoggedIn]);

  const handleSuccessMessage = (
    text
  ) => {
    setErrorMessage('');
    setSuccessMessage(text);
    setIsTooltipOpen(true);
  };

  const handleErrorMessage = (text) => {
    setSuccessMessage('');
    setErrorMessage(text);
    setIsTooltipOpen(true);
  };

  const handleRegister = (userData) => {
    registerUser(userData)
      .then(() => {
        handleLogin(userData);
      })
      .catch(() => {
        handleErrorMessage(
          errorMessages.emailAlreadyExists
        );
      });
  };

  const handleLogin = (userData) => {
    loginUser(userData)
      .then((res) => {
        localStorage.setItem(
          'jwt',
          res.token
        );
        handleSuccessMessage(
          pathname === '/signup'
            ? successMessages.register
            : successMessages.login
        );
        localStorage.setItem(
          'isLoggedIn',
          true
        );
        setIsLoggedIn(true);
        navigate('/movies');
      })
      .catch(() => {
        handleErrorMessage(
          errorMessages.incorrectNameOrPass
        );
      });
  };

  const signOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem(
      'isChecked'
    );
    localStorage.removeItem(
      'filteredMovies'
    );
    localStorage.removeItem(
      'filmQuery'
    );
    localStorage.removeItem(
      'isLoggedIn'
    );
    setFilteredMovies([]);
    setFilteredSavedMovies([]);
    setIsLoggedIn(false);
  };

  const checkToken = () => {
    const jwt =
      localStorage.getItem('jwt');

    if (jwt) {
      getApiContent(jwt)
        .then(() => {
          setIsLoggedIn(true);
          navigate(pathname);
        })
        .catch((err) =>
          console.log(err)
        );
    }
  };

  const addMovieToSaved = (
    movieData
  ) => {
    return new Promise(
      (resolve, reject) => {
        createMovie(movieData)
          .then((res) => {
            setSavedMovies([
              ...savedMovies,
              res,
            ]);
            // setLikedMovies([...likedMovies, movieData]);
            setIsActionPending(false);
            resolve(res);
            setLikedMovies([...likedMovies, res]);
          })
          .catch((err) => {
            console.error(err);
            setIsActionPending(false);
            reject(err);
          });
      }
    );
  };

  const deleteSavedMovieById = (id) => {
    deleteSavedMovie(id)
      .then(() => {
        setSavedMovies(
          (prevSavedMovies) =>
            prevSavedMovies.filter(
              (savedMovie) =>
                savedMovie._id !== id
            )
        );
        setIsActionPending(false);
        setLikedMovies(likedMovies.filter((savedMovie) => savedMovie._id !== id));
      })
      .catch((err) => {
        console.log(err);
        setIsActionPending(false);
      });
  };

  const deleteSavedMovieWrapper = (
    movieId
  ) => {
    return new Promise(
      (resolve, reject) => {
        const handleDelete =
          async () => {
            try {
              if (
                movieId.length === 24
              ) {
                await deleteSavedMovieById(
                  movieId
                );
              } else {
                const movieToDelete =
                  savedMovies.find(
                    (savedMovie) =>
                      savedMovie.movieId ===
                      movieId
                  );
                if (movieToDelete) {
                  await deleteSavedMovieById(
                    movieToDelete._id
                  );
                } else {
                  const error =
                    new Error(
                      'Фильм не найден в сохраненных фильмах'
                    );
                  throw error;
                }
              }

              setSavedMovies(
                (prevSavedMovies) =>
                  prevSavedMovies.filter(
                    (savedMovie) =>
                      savedMovie._id !==
                      movieId
                  )
              );
              setIsActionPending(false);
              resolve();
            } catch (error) {
              console.error(error);
              setIsActionPending(false);
              reject(error);
            }
          };

        handleDelete();
      }
    );
  };

  const fetchSavedMovies = () => {
    if (
      localStorage.getItem('isLoggedIn')
    ) {
      fetchMovies()
        .then((res) => {
          setSavedMovies(res);

          const likedMoviesAndUndef =
            filteredMovies.map(
              (filteredMovie) => {
                return res.find(
                  (savedMovie) =>
                    savedMovie.movieId ===
                    filteredMovie.id
                );
              }
            );
          const likedMovies =
            likedMoviesAndUndef.filter(
              (item) =>
                item !== undefined
            );

          setLikedMovies(likedMovies);
        })
        .catch((err) =>
          console.log(err)
        );
    }
  };

  useEffect(() => {
    fetchSavedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  isTablet={isTablet}
                  onChange={() =>
                    setIsMenuActive(
                      !isMenuActive
                    )
                  }
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  isActionPending={
                    isActionPending
                  }
                  setIsActionPending={
                    setIsActionPending
                  }
                  filteredMovies={
                    filteredMovies
                  }
                  setFilteredMovies={
                    setFilteredMovies
                  }
                  isLoading={isLoading}
                  setIsLoading={
                    setIsLoading
                  }
                  setMovies={setMovies}
                  addMovie={
                    addMovieToSaved
                  }
                  deleteMovie={
                    deleteSavedMovieWrapper
                  }
                  movies={movies}
                  element={Movies}
                  isTablet={isTablet}
                  onChange={() =>
                    setIsMenuActive(
                      !isMenuActive
                    )
                  }
                  likedMovies={
                    likedMovies
                  }
                  setLikedMovies={setLikedMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  deleteMovie={
                    deleteSavedMovieWrapper
                  }
                  setIsLoading={
                    setIsLoading
                  }
                  filteredSavedMovies={
                    filteredSavedMovies
                  }
                  setFilteredSavedMovies={
                    setFilteredSavedMovies
                  }
                  setMovies={
                    setSavedMovies
                  }
                  savedMovies={
                    savedMovies
                  }
                  element={SavedMovies}
                  isMobile={isMobile}
                  isTablet={isTablet}
                  onChange={() =>
                    setIsMenuActive(
                      !isMenuActive
                    )
                  }
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  onSignOut={signOut}
                  isTablet={isTablet}
                  onChange={() =>
                    setIsMenuActive(
                      !isMenuActive
                    )
                  }
                  handleSuccessMessage={
                    handleSuccessMessage
                  }
                  handleErrorMessage={
                    handleErrorMessage
                  }
                />
              }
            />
            <Route
              path="*"
              element={
                <ProtectedRoute
                  element={NotFound}
                />
              }
            />
            <Route
              path="/signup"
              element={
                localStorage.getItem(
                  'isLoggedIn'
                ) ? (
                  <Navigate to="/" />
                ) : (
                  <Register
                    onRegister={
                      handleRegister
                    }
                  />
                )
              }
            />
            <Route
              path="/signin"
              element={
                localStorage.getItem(
                  'isLoggedIn'
                ) ? (
                  <Navigate to="/" />
                ) : (
                  <Login
                    onLogin={
                      handleLogin
                    }
                  />
                )
              }
            />
          </Routes>
        </div>
        {footerCondition && <Footer />}
        <Menu
          value={isMenuActive}
          onChange={setIsMenuActive}
        />
        <InfoTooltip
          isOpen={isTooltipOpen}
          onClose={() =>
            setIsTooltipOpen(false)
          }
          errorMessage={errorMessage}
          successMessage={
            successMessage
          }
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
