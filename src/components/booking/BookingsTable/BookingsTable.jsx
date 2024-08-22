import DateSlider from 'components/common/DateSlider';
import { parseISO } from 'date-fns';
import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

const BookingsTable = ({ bookingInfo, handleBookingCancellation }) => {
  const [filteredBookings, setFilteredBookings] = useState(bookingInfo);

  const filterBookings = (startDate, endDate) => {
    let filtered = bookingInfo;
    if (startDate && endDate) {
      filtered = bookingInfo.filter((booking) => {
        const bookingStarDate = parseISO(booking.checkInDate);
        const bookingEndDate = parseISO(booking.checkOutDate);
        return (
          bookingStarDate >= startDate && bookingEndDate <= endDate && bookingEndDate > startDate
        );
      });
    }
    setFilteredBookings(filtered);
  };

  useEffect(() => {
    setFilteredBookings(bookingInfo);
  }, [bookingInfo]);

  return (
    <section className="p-4">
      <DateSlider onDateChange={filterBookings} onFilterChange={filterBookings} />

      <Table bordered hover className="shadow">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Booking ID</th>
            <th>Room ID</th>
            <th>Room Type</th>
            <th>Check-In Date</th>
            <th>Check-Out Date</th>
            <th>Guest Name</th>
            <th>Guest Email</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Total Guest</th>
            <th>Confirmation Code</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {filteredBookings.length > 0
            ? (
              filteredBookings.map((booking, index) => (
                <tr key={booking.id}>
                  <td>{index + 1}</td>
                  <td>{booking.id}</td>
                  <td>{booking.room.id}</td>
                  <td>{booking.room.roomType}</td>
                  <td>{booking.checkInDate}</td>
                  <td>{booking.checkOutDate}</td>
                  <td>{booking.guestName}</td>
                  <td>{booking.guestEmail}</td>
                  <td>{booking.numOfAdults}</td>
                  <td>{booking.numOfChildren}</td>
                  <td>{booking.totalNumOfGuests}</td>
                  <td>{booking.bookingConfirmationCode}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleBookingCancellation(booking.id)}
                    >
                      Cancel
                    </Button>
                  </td>
                </tr>
              ))
            )
            : (
              <tr>
                <td colSpan={14} className="text-center">
                  No booking found for the selected dates
                </td>
              </tr>
            )}
        </tbody>
      </Table>
    </section>
  );
};

export default BookingsTable;
