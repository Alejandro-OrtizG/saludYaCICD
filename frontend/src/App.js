import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import RecoverPassword from "./pages/RecoverPassword";


import RegisterPaciente from "./pages/RegisterPaciente";


import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardMedico from "./pages/DashboardMedico";
import DashboardPaciente from "./pages/DashboardPaciente";

import CrearMedico from "./pages/CrearMedico";
import AgendarCita from "./pages/AgendarCita";
import PerfilPaciente from "./pages/PerfilPaciente";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/recover" element={<RecoverPassword />} />

        <Route path="/register-paciente" element={<RegisterPaciente />} />

        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
        <Route path="/crear-medico" element={<CrearMedico />} />

        <Route path="/dashboard-medico" element={<DashboardMedico />} />

        <Route path="/dashboard-paciente" element={<DashboardPaciente />} />
        <Route path="/agendar-cita" element={<AgendarCita />} />
        <Route path="/perfil" element={<PerfilPaciente />} />

      </Routes>
    </Router>
  );
}

export default App;
