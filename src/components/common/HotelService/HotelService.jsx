import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Header from '../Header';
import {
  FaCocktail,
  FaParking,
  FaSnowflake,
  FaTshirt,
  FaUtensils,
  FaWifi
} from 'react-icons/fa';

const HotelService = () => {
  return (
    <React.Fragment>
      <div className="mb-2">
        <Header title={'Our Services'} />
        <Row className="mt-4">
          <h4 className="text-center">
            Services at <span style={{ color: '#DAA520' }}> Royal Horizon Hotel </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaWifi style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>WiFi</span>
                  </div>
                </Card.Title>
                <Card.Text>Stay connected with high-speed internet access.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaUtensils style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>Breakfast</span>
                  </div>
                </Card.Title>
                <Card.Text>Start your day with a delicious breakfast buffet.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaTshirt style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>Laundry</span>
                  </div>
                </Card.Title>
                <Card.Text>Keep your clothes clean and fresh with our laundry service.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaCocktail style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>Mini-bar</span>
                  </div>
                </Card.Title>
                <Card.Text>Enjoy a refreshing drink or snack from our in-room mini-bar.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaParking style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>Parking</span>
                  </div>
                </Card.Title>
                <Card.Text>Park your car conveniently in our on-site parking lot.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: '7.5rem' }}>
              <Card.Body>
                <Card.Title style={{ color: '#DAA520' }}>
                  <div className="d-flex align-items-center">
                    <FaSnowflake style={{ height: '1rem', marginRight: '0.5rem' }} />
                    <span>Air conditioning</span>
                  </div>
                </Card.Title>
                <Card.Text>Stay cool and comfortable with our air conditioning system.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
    </React.Fragment>
  );
};

export default HotelService;
