import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import { appointmentData } from "../helper/data"

const Home = () => {

  const [appointmens, setAppointmens] = useState(appointmentData)
  console.log(appointmens)
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList apps={appointmens} />
    </main>
  )
}

export default Home
