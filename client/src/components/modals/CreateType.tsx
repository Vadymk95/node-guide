import { FC, useState, ChangeEvent } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ModalTypeProps } from './model';
import { createType } from '../../http/deviceApi';

export const CreateType: FC<ModalTypeProps> = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const addType = () => {
    createType({ name: value, id: Date.now() }).then(() => setValue(''));
    onHide();
  };

  return (
    <Modal size="lg" centered show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={handleInput}
            placeholder="Enter type name..."
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
