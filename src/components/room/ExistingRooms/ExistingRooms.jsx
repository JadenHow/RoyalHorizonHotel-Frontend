import RoomFilter from 'components/common/RoomFilter';
import RoomPaginator from 'components/common/RoomPaginator';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';
import { FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ExistingRooms = ({ rooms, fetchRooms, deleteRoom, isLoading, error }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(8);
  const [filteredRooms, setFilteredRooms] = useState([{ id: '', roomType: '', roomPrice: '' }]);
  const [selectedRoomType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [needsRefresh, setNeedsRefresh] = useState(false);

  useEffect(() => {
    if (selectedRoomType === '') {
      setFilteredRooms(rooms);
    } else {
      const filteredRooms = rooms.filter((room) => room.roomType === selectedRoomType);
      setFilteredRooms(filteredRooms);
    }
    setCurrentPage(1);
  }, [rooms, selectedRoomType]);

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDelete = useCallback(async (roomId, roomImage) => {
    deleteRoom({ roomId, oldImage: roomImage });
    setNeedsRefresh(true);
  }, [deleteRoom]);

  useEffect(() => {
    if (needsRefresh) {
      fetchRooms();
      setNeedsRefresh(false);
    }
  }, [needsRefresh, fetchRooms]);

  useEffect(() => {
    if (isLoading) {
      setErrorMessage('');
      setSuccessMessage('');
    } else {
      if (error) {
        setSuccessMessage('');
        setErrorMessage(error);
      } else if (error === false) {
        setSuccessMessage('Room successfully deleted');
        setErrorMessage('');
      } else {
        setErrorMessage('');
        setSuccessMessage('');
      }
    }

    const timer = setTimeout(() => {
      setErrorMessage('');
      setSuccessMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [error, isLoading]);

  const calculateTotalPages = (filteredRooms, roomsPerPage, rooms) => {
    const totalRooms = filteredRooms.length > 0 ? filteredRooms.length : rooms.length;
    return Math.ceil(totalRooms / roomsPerPage);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom);
  return (
    <React.Fragment>
      <Container className="col-md-8 col-lg-6">
        {successMessage && <Alert variant="success" className="mt-5">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger" className="mt-5">{errorMessage}</Alert>}
      </Container>

      {isLoading
        ? <p>Loading existing rooms...</p>
        : <React.Fragment>
          <Container className="mt-5 mb-5">
            <Row className="d-flex justify-content-between mb-3 mt-5">
              <Col>
                <h2>Existing Rooms</h2>
              </Col>
              <Col className="d-flex justify-content-end">
                <Link to="/add-room">
                  <Button variant="primary">
                    <FaPlus /> Add Room
                  </Button>
                </Link>
              </Col>
            </Row>

            <Row>
              <Col md={6} className="mb-2">
                <RoomFilter data={rooms} setFilteredData={setFilteredRooms} />
              </Col>
            </Row>

            <Table bordered hover className="mt-3">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Room Type</th>
                  <th>Room Price</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentRooms.map((room) => (
                  <tr key={room.id} className="text-center">
                    <td>{room.id}</td>
                    <td>{room.roomType}</td>
                    <td>{room.roomPrice}</td>
                    <td className="gap-2 d-flex justify-content-center">
                      <Link to={`/edit-room/${room.id}`}>
                        <Button variant="warning">
                          <FaEdit style={{ fontSize: '1rem' }} />
                        </Button>
                      </Link>
                      <Button variant="danger" onClick={() => handleDelete(room.id, room.image)}>
                        <FaTrashAlt style={{ fontSize: '1rem' }} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <RoomPaginator
              currentPage={currentPage}
              totalPages={calculateTotalPages(filteredRooms, roomsPerPage, rooms)}
              onPageChange={handlePaginationClick}
            />
          </Container>
        </React.Fragment>
      }
    </React.Fragment>
  );
};

export default ExistingRooms;
