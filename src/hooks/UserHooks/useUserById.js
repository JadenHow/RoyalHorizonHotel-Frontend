import { useSelector } from 'react-redux';

export default function useUserByEmail() {
  const currentUser = useSelector((state) => state.user.currentUser);
  return currentUser;
};
