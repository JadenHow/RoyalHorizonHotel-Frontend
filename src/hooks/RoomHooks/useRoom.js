import { useSelector } from 'react-redux';

export default function useRoom() {
  const rooms = useSelector((state) => state.room);
  return rooms;
};
