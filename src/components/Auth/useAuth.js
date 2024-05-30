// components/Auth/useAuth.js
import { useSelector } from 'react-redux';

const useAuth = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return { isLoggedIn, user };
};

export default useAuth;