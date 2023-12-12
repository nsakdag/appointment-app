import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { doctorData } from "../helper/data";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ appointments, setAppointments , handleadd}) => {
  const [show, setShow] = useState(false);
  const [drName, setdrName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (a) => {
    setShow(true);
    setdrName(a);
  };

  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ img, name, dep }) => (
          <Col sm={6} lg={4}>
            <img
              onClick={() => handleShow(name)}
              className="img-thumbnail doctor-img"
              src={img}
              alt={name}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal
        show={show}
        drName={drName}
        handleClose={handleClose}
        handleShow={handleShow}
        appointments={appointments}
        setAppointments={setAppointments}
        handleadd={handleadd}
      />
    </Container>
  );
};

export default Doctors;
