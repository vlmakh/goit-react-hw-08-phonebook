import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export const PrivateRoute = ({ component: Component }: any) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isCheckingLogin = useSelector((state: RootState) => state.auth.isCheckingLogin);
  const shouldRedirect = !isLoggedIn && !isCheckingLogin;

  return shouldRedirect ? <Navigate to="/login" /> : Component;
};
