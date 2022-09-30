import { FC, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { CreateBrand, CreateDevice, CreateType } from '../components';

export const AdminPage: FC = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  const handleBrandVisible = () => setBrandVisible(false);
  const handleTypeVisible = () => setTypeVisible(false);
  const handleDeviceVisible = () => setDeviceVisible(false);
  const openBrandModal = () => setBrandVisible(true);
  const openTypeModal = () => setTypeVisible(true);
  const openDeviceModal = () => setDeviceVisible(true);
  return (
    <Container className="d-flex flex-column">
      <Button onClick={openBrandModal} variant="outline-dark" className="mt-2 p-2">
        Add Type
      </Button>
      <Button onClick={openTypeModal} variant="outline-dark" className="mt-2 p-2">
        Add Brand
      </Button>
      <Button onClick={openDeviceModal} variant="outline-dark" className="mt-2 p-2">
        Add Device
      </Button>
      <CreateBrand show={brandVisible} onHide={handleBrandVisible} />
      <CreateDevice show={deviceVisible} onHide={handleDeviceVisible} />
      <CreateType show={typeVisible} onHide={handleTypeVisible} />
    </Container>
  );
};
