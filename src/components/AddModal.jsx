import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddModal({ handleClose, show, drName, handleadd, }) {


  const [newAppointment, setNewAppointment] = useState({
    id: new Date().getTime,
    patient: "",
    day: "",
    consulted: false,
    doctor: "",
  });

  function handleChange(e) {
    setNewAppointment({ ...newAppointment, doctor : drName , [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleadd(newAppointment);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Appointments for {drName}</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="patient"
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="day"
                type="datetime-local"
                placeholder="date"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Modal.Footer>
              <Button variant="secondary" type="submit" onClick={handleClose}>
                Submit
              </Button>
              <Button variant="primary" type="button" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
