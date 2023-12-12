import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { TiDelete } from "react-icons/ti";
// import { useState } from "react";


const AppointmentList = ({ appointments , deleteRow ,handleDoubleClick }) => {




  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
        Appointment List
      </h3>
     { appointments.length === 0 &&  (<img src="./img/appointment.jpg" alt="error" width="70%"/>)}
      
      {appointments.map(({ doctor, day, patient, consulted, id }) => (
        <div onDoubleClick={() =>handleDoubleClick(id)} className={consulted ? "appointments consulted " : "appointments"}>

        <Row
          key={id}
          className="justify-content-between align-items-center"
          
        >
          <Col>
            <h4>{doctor}</h4>
            <h5>{patient}</h5>
          </Col>
          <Col>{new Date(day).toLocaleDateString()}</Col>
          <Col>
            < TiDelete className="h1 text-danger" onClick={() =>deleteRow(id)}/>
          </Col>
        </Row>

        </div>
      ))}
        
      
    </Container>
  );
};

export default AppointmentList;
