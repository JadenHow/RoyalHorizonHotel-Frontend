import { useSelector } from 'react-redux';

export default function useAvailableRooms() {
  const availableRooms = useSelector((state) => state.room.availableRooms);
  return availableRooms;
};
