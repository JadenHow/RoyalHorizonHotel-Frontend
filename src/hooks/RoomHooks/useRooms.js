import { useSelector } from 'react-redux';

export default function useRooms() {
  const rooms = useSelector((state) => state.room.rooms);
  return rooms;
};
