import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';

const RoomTypeSelector = ({ handleRoomInputChange, newRoom, roomTypes: types }) => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
  const [newRoomType, setNewRoomType] = useState('');

  useEffect(() => {
    setRoomTypes(types);
  }, [types]);

  const handleNewRoomTypeInputChange = (e) => {
    setNewRoomType(e.target.value);
  };

  const handleAddNewRoomType = () => {
    if (newRoomType !== '') {
      setRoomTypes([...roomTypes, newRoomType]);
      setNewRoomType('');
      setShowNewRoomTypeInput(false);
      handleRoomInputChange({ target: { name: 'roomType', value: newRoomType } });
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Row>
        <Col>
          <Form.Select
            required
            name="roomType"
            onChange={(e) => {
              if (e.target.value === 'Add New') {
                setShowNewRoomTypeInput(true);
              } else {
                handleRoomInputChange(e);
              }
            }}
            value={newRoom.roomType}
            className="form-select"
          >
            <option value="">Select a room type</option>
            {roomTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
            <option value="Add New">Add New</option>
          </Form.Select>
        </Col>
      </Row>
      {showNewRoomTypeInput && (
        <>
          <Row className="mt-2">
            <Col>
              <Form.Group className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter New Room Type"
                  value={newRoomType}
                  onChange={handleNewRoomTypeInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button className="btn-hotel mt-2" type="button" onClick={handleAddNewRoomType}>
                Add
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default RoomTypeSelector;
