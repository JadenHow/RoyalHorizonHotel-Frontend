import { useSelector } from 'react-redux';

export default function useRoomById() {
  const room = useSelector((state) => state.rooms.currentRoom);
  return room;
};
