import React from 'react';
import BookingForm from '../BookingForm';
import { Col, Container, Image, ListGroup, Row, Table } from 'react-bootstrap';
import {
  FaUtensils,
  FaWifi,
  FaTv,
  FaWineGlassAlt,
  FaParking,
  FaCar,
  FaTshirt
} from 'react-icons/fa';

const Checkout = ({ roomById }) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="mt-5">
            <React.Fragment>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  src={`https://ucarecdn.com/${roomById?.image}/`}
                  alt="Room Image"
                  fluid
                  style={{ height: '20rem' }}
                />
              </div>
              <Table bordered className="mt-5">
                <tbody>
                  <tr>
                    <th>Room Type:</th>
                    <td>{roomById?.roomType}</td>
                  </tr>
                  <tr>
                    <th>Price per night:</th>
                    <td>${roomById?.roomPrice}</td>
                  </tr>
                  <tr>
                    <th>Room Service:</th>
                    <td>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <FaWifi /> Wifi
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaTv /> Netflix Premium
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaUtensils /> Breakfast
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaWineGlassAlt /> Mini bar refreshment
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaCar /> Car Service
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaParking /> Parking Space
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <FaTshirt /> Laundry
                        </ListGroup.Item>
                      </ListGroup>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </React.Fragment>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookingForm roomById={roomById} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Checkout;
