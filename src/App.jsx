import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((p) => p.id !== id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container bg-gray-100 mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
