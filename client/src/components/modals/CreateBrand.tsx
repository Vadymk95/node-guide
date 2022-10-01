import { ChangeEvent, FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createBrand } from '../../http/deviceApi';
import { ModalTypeProps } from './model';

export const CreateBrand: FC<ModalTypeProps> = ({ show, onHide }) => {
  const [value, setValue] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const addBrand = () => {
    createBrand({ name: value, id: Date.now() }).then(() => setValue(''));
    onHide();
  };
  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control value={value} onChange={handleInput} placeholder="Enter brand name..." />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
