import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const RoomFilter = ({ data, setFilteredData }) => {
  const [filter, setFilter] = useState('');

  const handleSelectChange = (e) => {
    const selectedType = e.target.value;
    setFilter(selectedType);

    const filteredRooms = data.filter((room) =>
      room.roomType.toLowerCase().includes(selectedType.toLowerCase())
    );
    setFilteredData(filteredRooms);
  };

  const clearFilter = () => {
    setFilter('');
    setFilteredData(data);
  };

  const roomTypes = ['', ...new Set(data.map((room) => room.roomType))];

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="room-type-filter">Filter rooms by type</InputGroup.Text>
      <Form.Select
        aria-label="room type filter"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="">Select a room type to filter...</option>
        {roomTypes.map((type, index) => (
          <option key={index} value={String(type)}>
            {String(type)}
          </option>
        ))}
      </Form.Select>
      <Button onClick={clearFilter}>
        Clear Filter
      </Button>
    </InputGroup>
  );
};

export default RoomFilter;
