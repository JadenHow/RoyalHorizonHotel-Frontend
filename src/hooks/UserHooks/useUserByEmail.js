import { useSelector } from 'react-redux';

export default function useUserByEmail() {
  const currentUser = useSelector((state) => state.users.currentUser);
  return currentUser;
};
