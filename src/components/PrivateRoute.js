import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/" /> : Component;
};
