const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://salud-ya-cicd.vercel.app"
  ],
  credentials: true
}));

app.use(express.json());

app.post("/login", (req, res) => {
  try {
    const { email, password } = req.body;

    const user = db.prepare(`
      SELECT * FROM usuarios
      WHERE email = ? AND password = ?
    `).get(email, password);

    if (user) {
      return res.json({
        success: true,
        user
      });
    }

    res.json({ success: false });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.post("/register", (req, res) => {
  try {
    const {
      nombre,
      email,
      password,
      telefono,
      tipo_id,
      numero_id,
      rh
    } = req.body;

    const result = db.prepare(`
      INSERT INTO usuarios
      (nombre,email,password,telefono,tipo_id,numero_id,rh)
      VALUES (?,?,?,?,?,?,?)
    `).run(
      nombre,
      email,
      password,
      telefono,
      tipo_id,
      numero_id,
      rh
    );

    res.json({
      success: true,
      id: result.lastInsertRowid
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.get("/usuario/:email", (req, res) => {
  try {
    const user = db.prepare(`
      SELECT * FROM usuarios
      WHERE email = ?
    `).get(req.params.email);

    res.json({
      success: true,
      user
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.post("/citas", (req, res) => {
  try {
    const {
      paciente_email,
      especialidad,
      medico,
      fecha,
      hora
    } = req.body;

    const result = db.prepare(`
      INSERT INTO citas
      (paciente_email, especialidad, medico, fecha, hora)
      VALUES (?, ?, ?, ?, ?)
    `).run(
      paciente_email,
      especialidad,
      medico,
      fecha,
      hora
    );

    res.json({
      success: true,
      id: result.lastInsertRowid
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

app.get("/citas/:email", (req, res) => {
  try {
    const citas = db.prepare(`
      SELECT * FROM citas
      WHERE paciente_email = ?
    `).all(req.params.email);

    res.json({
      success: true,
      citas
    });

  } catch (error) {
    console.error(error);
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});