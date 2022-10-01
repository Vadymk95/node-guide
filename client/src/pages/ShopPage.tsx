import { FC, useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { BrandBar, DeviceList, TypeBar } from '../components';
import { Context } from '../main';
import { fetchBrands, fetchTypes, fetchDevices } from '../http/deviceApi';

export const ShopPage: FC = observer(() => {
  const { device } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data: any) => device.setTypes(data));
    fetchBrands().then((data: any) => device.setBrands(data));
    fetchDevices().then((data: any) => device.setDevices(data.rows));
  }, []);
  return (
    <Container>
      <h1>My Shop</h1>
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
});
