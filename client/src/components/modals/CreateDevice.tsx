import { FC, useContext, useState } from 'react';
import { Button, Dropdown, Form, Modal, Row, Col } from 'react-bootstrap';
import { ModalTypeProps } from './model';
import { Context } from '../../main';

type DeviceType = {
  title: string;
  description: string;
  number: number;
};

export const CreateDevice: FC<ModalTypeProps> = ({ show, onHide }) => {
  const [info, setInfo] = useState<DeviceType[]>([]);
  const { device } = useContext(Context);
  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };
  const DeleteInfo = (number: number): void => setInfo(info.filter((i) => i.number !== number));
  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Device</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-3">
        <Form>
          <Dropdown className="my-2">
            <Dropdown.Toggle>choose type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="my-2">
            <Dropdown.Toggle>choose brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div className="mt-4">
            <Form.Control placeholder="Enter device name..." />
            <Form.Control
              className="mt-2"
              placeholder="Enter device price..."
              type="number"
            />
            <Form.Control className="mt-2" type="file" />
          </div>
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Add new Device
          </Button>
          {info.map((i) => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control placeholder="Enter property name..." />
              </Col>
              <Col md={4}>
                <Form.Control placeholder="Enter description name..." />
              </Col>
              <Col md={4}>
                <Button onClick={() => DeleteInfo(i.number)} variant="outline-danger">Delete</Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={onHide}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
