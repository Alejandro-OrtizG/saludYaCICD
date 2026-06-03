import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterMedico() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
    licenciaMedica: "",
    correo: "",
    especialidad: "",
    passwordTemporal: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Cuenta médica creada correctamente");
    navigate("/dashboard-admin");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        
        <div style={styles.logo}>🩺</div>

       
        <h2 style={styles.title}>
          Crear cuenta médico
        </h2>

        <p style={styles.subtitle}>
          Registra los datos básicos del profesional
        </p>

        <form onSubmit={handleSubmit} style={styles.formGrid}>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            style={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="telefono"
            placeholder="Número de teléfono"
            style={styles.input}
            onChange={handleChange}
          />

          <select
            name="tipoIdentificacion"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="">Tipo de identificación</option>
            <option>Cédula</option>
            <option>Pasaporte</option>
          </select>

          <input
            type="text"
            name="numeroIdentificacion"
            placeholder="Número de identificación"
            style={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="licenciaMedica"
            placeholder="Número licencia médica"
            style={styles.input}
            onChange={handleChange}
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            style={styles.input}
            onChange={handleChange}
          />

          <select
            name="especialidad"
            style={styles.input}
            onChange={handleChange}
          >
            <option value="">Especialidad</option>
            <option>Medicina General</option>
            <option>Pediatría</option>
            <option>Cardiología</option>
            <option>Dermatología</option>
          </select>

          <input
            type="text"
            name="passwordTemporal"
            placeholder="Contraseña temporal"
            style={styles.input}
            onChange={handleChange}
          />

          
          <div style={styles.buttonContainer}>
            <button
              type="button"
              style={styles.cancelButton}
              onClick={() => navigate("/dashboard-admin")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              style={styles.createButton}
            >
              Crear cuenta
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#E5E6E8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "500px",
    background: "#FFFFFF",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)"
  },

  logo: {
    width: "48px",
    height: "48px",
    background: "#2563EB",
    borderRadius: "12px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "20px"
  },

  title: {
    textAlign: "center",
    color: "#111827",
    marginTop: "12px"
  },

  subtitle: {
    textAlign: "center",
    color: "#6B7280",
    marginBottom: "20px"
  },

  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  },

  input: {
    height: "40px",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    padding: "0 12px"
  },

  buttonContainer: {
    gridColumn: "span 2",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px"
  },

  cancelButton: {
    width: "48%",
    height: "44px",
    background: "#FFFFFF",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    cursor: "pointer"
  },

  createButton: {
    width: "48%",
    height: "44px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default RegisterMedico;
