import { FC, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { Row } from 'react-bootstrap';
import { DeviceItem } from './DeviceItem';

export const DeviceList: FC = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});