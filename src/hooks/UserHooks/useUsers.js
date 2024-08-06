import { useSelector } from 'react-redux';

export default function useUsers() {
  const users = useSelector((state) => state.users.users);
  return users;
};
