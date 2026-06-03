import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RecoverPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleRecover = () => {
    if (!email.includes("@")) {
      setMessage("Correo inválido");
      setMessageColor("#C54D4D");
      return;
    }

    setMessage("Correo válido. Instrucciones enviadas");
    setMessageColor("#71D96B");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        
        
        <div style={styles.logo}>🔒</div>

        
        <h1 style={styles.title}>Recuperar contraseña</h1>

        
        <p style={styles.subtitle}>
          Ingresa tu correo electrónico
        </p>

        
        <div style={styles.inputContainer}>
          <label style={styles.label}>
            Correo electrónico
          </label>

          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              ...styles.input,
              border:
                message === "Correo inválido"
                  ? "1px solid #C54D4D"
                  : message.includes("válido")
                  ? "1px solid #71D96B"
                  : "1px solid #D1D5DB"
            }}
          />

          {message && (
            <p style={{ ...styles.message, color: messageColor }}>
              {message}
            </p>
          )}
        </div>

        
        <button
          style={styles.button}
          onClick={handleRecover}
        >
          Enviar
        </button>

        
        <p
          style={styles.link}
          onClick={() => navigate("/")}
        >
          Volver a iniciar sesión
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#E5E6E8"
  },

  card: {
    width: "360px",
    background: "#FFFFFF",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box"
  },

  logo: {
    width: "48px",
    height: "48px",
    background: "#2563EB",
    borderRadius: "12px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    marginBottom: "12px"
  },

  title: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "8px",
    textAlign: "center"
  },

  subtitle: {
    fontSize: "13px",
    color: "#6B7280",
    textAlign: "center",
    marginBottom: "16px"
  },

  inputContainer: {
    width: "100%",
    marginBottom: "16px"
  },

  label: {
    fontSize: "12px",
    color: "#6B7280",
    display: "block",
    marginBottom: "4px"
  },

  input: {
    width: "100%",
    height: "40px",
    borderRadius: "8px",
    padding: "0 12px",
    boxSizing: "border-box",
    outline: "none"
  },

  message: {
    fontSize: "12px",
    marginTop: "6px"
  },

  button: {
    width: "100%",
    height: "44px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "12px"
  },

  link: {
    color: "#2563EB",
    fontSize: "13px",
    cursor: "pointer"
  }
};

export default RecoverPassword;
