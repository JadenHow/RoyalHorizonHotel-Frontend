import React, { useState, useEffect } from 'react';
import Header from 'components/common/Header';
import BookingsTable from '../BookingsTable';
import { Container } from 'react-bootstrap';

const Bookings = ({ bookings, fetchBookings, cancelBooking, isLoading }) => {
  const [needsRefresh, setNeedsRefresh] = useState(false);

  const handleBookingCancellation = (bookingId) => {
    cancelBooking(bookingId);
    setNeedsRefresh(true);
  };

  useEffect(() => {
    if (needsRefresh && !isLoading) {
      fetchBookings();
      setNeedsRefresh(false);
    }
  }, [needsRefresh, isLoading]);

  return (
    <section style={{ backgroundColor: 'whitesmoke' }}>
      <Container>
        <Header title="Existing Bookings" />
        {isLoading
          ? (
            <div className="d-flex justify-content-center align-items-center">
              <span className="ms-2">Loading existing bookings</span>
            </div>
          )
          : (
            <BookingsTable
              bookingInfo={bookings}
              handleBookingCancellation={handleBookingCancellation}
            />
          )}
      </Container>
    </section>
  );
};

export default Bookings;
