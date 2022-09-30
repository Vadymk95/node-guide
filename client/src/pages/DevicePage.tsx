import { FC } from 'react';
import { Container, Col, Image, Row, Card, Button } from 'react-bootstrap';
import star from './../assets/star.png';

export const DevicePage: FC = () => {
  const device = {
    id: 1,
    name: 'POCO m4 pro 5g',
    price: 22000,
    rating: 5,
    img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png',
  };
  const description = [
    { id: 1, title: 'RAM', description: '8 gb' },
    { id: 2, title: 'Camera', description: '16 mp' },
    { id: 3, title: 'Processor', description: 'Asimut' },
    { id: 4, title: 'Amount of Cores', description: '4' },
    { id: 5, title: 'Accumulator', description: '5200' },
  ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${star}) no-repeat center center`,
                width: '240px',
                height: '240px',
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>from {device.price} $</h3>
            <Button variant="outline-dark">Add to basket</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column mt-3">
        <h1>Features</h1>
        {description.map((info) => (
          <Row
            key={info.id}
            className="border"
            style={{
              backgroundColor: info.id % 2 === 0 ? 'lightgray': 'transparent',
              padding: 10,
            }}
          >
            {info.title} {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
