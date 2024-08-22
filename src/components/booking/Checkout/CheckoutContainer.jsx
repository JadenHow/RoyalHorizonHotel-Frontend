import React, { useEffect } from 'react';
import Checkout from './Checkout';
import RoomHooks from 'hooks/RoomHooks';
import { useParams } from 'react-router-dom';

const CheckoutContainer = () => {
  const fetchRoomById = RoomHooks.useFetchRoomById();
  const roomById = RoomHooks.useRoomById();
  const { isLoading } = RoomHooks.useRoom();

  const { roomId } = useParams();

  useEffect(() => {
    fetchRoomById({ roomId });
  }, [roomId]);

  const allProps = {
    roomById
  };

  if (isLoading) {
    return <p>Loading room information...</p>;
  }

  return (
    <Checkout {...allProps} />
  );
};

export default CheckoutContainer;
