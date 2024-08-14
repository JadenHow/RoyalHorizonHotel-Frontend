import { useSelector } from 'react-redux';

export default function useRoomById() {
  const room = useSelector((state) => state.room.currentRoom);
  return room;
};
