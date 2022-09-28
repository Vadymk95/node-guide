import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeBar } from '../components';

export const ShopPage: FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>fgh</Col>
      </Row>
    </Container>
  );
};
