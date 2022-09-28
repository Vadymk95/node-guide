import { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrandBar, DeviceList, TypeBar } from '../components';

export const ShopPage: FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};
