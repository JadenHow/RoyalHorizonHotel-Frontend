import React from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from 'components/layout/MainHeader';
import RoomSearch from 'components/common/RoomSearch';
import RoomCarousel from 'components/common/RoomCarousel/RoomCarousel';
import Parallax from 'components/common/Parallax';
import HotelService from 'components/common/HotelService';

const Home = () => {
  const location = useLocation();

  const message = location.state && location.state.message;
  const currentUser = localStorage.getItem('userId');
  return (
    <section>
      {message && <p className="text-warning px-5">{message}</p>}
      {currentUser && (
        <h6 className="text-success text-center"> You are logged-In as {currentUser}</h6>
      )}
      <MainHeader />
      <div className="container">
        <RoomSearch />
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax />
        <RoomCarousel />
      </div>
    </section>
  );
};

export default Home;
