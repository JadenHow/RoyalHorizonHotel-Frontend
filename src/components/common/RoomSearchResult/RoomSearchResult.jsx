import React, { useState } from 'react';
import RoomCard from 'components/room/RoomCard';
import { Button, Row, Col } from 'react-bootstrap';
import RoomPaginator from '../RoomPaginator';

const RoomSearchResults = ({ results, onClearSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 3;
  const totalResults = results.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = results.slice(startIndex, endIndex);

  return (
    <React.Fragment>
      {results.length > 0
        ? (<React.Fragment>
          <h5 className="text-center mt-5 mb-4">Search Results</h5>
          <Row>
            {paginatedResults.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </Row>
          <Row>
            <Col>
              {totalResults > resultsPerPage && (
                <RoomPaginator
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
              <div className="pagination justify-content-center">
                <Button variant="secondary" onClick={onClearSearch} style={{ width: '100%' }}>
                  Clear Search
                </Button>
              </div>
            </Col>
          </Row>
        </React.Fragment>
        )
        : (
          <p></p>
        )}
    </React.Fragment>
  );
};

export default RoomSearchResults;
