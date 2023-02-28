import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const RestrictedRoute = ({ component: Component }: any) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
};
