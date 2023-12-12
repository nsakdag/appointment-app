import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
// import { appointmentData } from "../helper/data";
import { useState } from "react";
const Home = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  // first function

  function handleadd(newAppointment) {
    setAppointments([...appointments, newAppointment]);
    localStorage.setItem(
      "list",
      JSON.stringify([...appointments, newAppointment])
    );
  }

  // second function

  function deleteRow(id) {
    const filteredList =appointments.filter((item) => item.id !== id)
    setAppointments(filteredList);
    localStorage.setItem(
      "list",
      JSON.stringify(filteredList)
    );
  }

  // third function

  function handleDoubleClick(id) {
    const updatedList = appointments.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setAppointments(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        appointments={appointments}
        setAppointments={setAppointments}
        handleadd={handleadd}
      />
      <AppointmentList
        appointments={appointments}
        deleteRow={deleteRow}
        handleDoubleClick={handleDoubleClick}
      />
    </main>
  );
};

export default Home;
