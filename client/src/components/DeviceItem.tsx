import { FC } from 'react';
import { Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { EnumRoutes } from '../router';
import { Device } from '../store/DeviceStore';

export const DeviceItem: FC<{device: Device}> = ({ device }) => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(EnumRoutes.DEVICE_ROUTE + '/' + device.id);
  return (
    <Col className="mb-4" md={3} onClick={handleNavigate}>
      <Card style={{ width: 200, cursor: 'pointer' }} border="grey">
        <Image width={200} height={200} src={import.meta.env.VITE_API_URL + device.img} />
        <div className="p-3">
          <div className="d-flex text-black-50 justify-content-between align-items-center mt-2">
            <div>Samsung</div>
            <div className="d-flex align-items-center">
              <div>{device.rating}</div>
              <Image width={15} height={15} src={star} />
            </div>
          </div>
          <div>{device.name}</div>
        </div>
      </Card>
    </Col>
  );
};
