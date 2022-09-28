import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { Row, Col, Card } from 'react-bootstrap';

export const BrandBar: FC = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row>
      {device.brands.map((brand) => (
        <Col md={4} key={brand.id}>
          <Card
            style={{ cursor: 'pointer' }}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'grey'}
            onClick={() => device.setSelectedBrand(brand)}
            className="p-3 mb-4"
          >
            {brand.name}
          </Card>
        </Col>
      ))}
    </Row>
  );
});
