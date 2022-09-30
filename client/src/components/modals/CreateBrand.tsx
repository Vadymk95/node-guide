import { FC } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { ModalTypeProps } from './model';

export const CreateBrand: FC<ModalTypeProps> = ({ show, onHide }) => {
  return (
    <Modal size="lg" centered onHide={onHide} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Brand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control placeholder="Enter brand name..." />
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
