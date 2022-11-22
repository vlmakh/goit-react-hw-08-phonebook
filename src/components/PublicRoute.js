import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to="/" /> : Component;
};
