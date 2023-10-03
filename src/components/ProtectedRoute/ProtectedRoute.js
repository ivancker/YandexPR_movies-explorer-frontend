import { Navigate } from 'react-router-dom';

function ProtectedRoute ({ element: Component, ...props }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn) {
    return <Component {...props} />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
