const Database = require("better-sqlite3");
const db = new Database("saludya.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    email TEXT UNIQUE,
    password TEXT,
    telefono TEXT,
    tipo_id TEXT,
    numero_id TEXT,
    rh TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS citas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    paciente_email TEXT,
    especialidad TEXT,
    medico TEXT,
    fecha TEXT,
    hora TEXT
  )`);

  // Paciente Demo
  db.run(`INSERT OR IGNORE INTO usuarios
    (id,nombre,email,password,telefono,tipo_id,numero_id,rh)
    VALUES (
      1,
      'Paciente Demo',
      'demo@saludya.com',
      '123456',
      '3000000000',
      'CC',
      '12345678',
      'O+'
    )`);

  // Administrador Demo
  db.run(`INSERT OR IGNORE INTO usuarios
    (id,nombre,email,password,telefono,tipo_id,numero_id,rh)
    VALUES (
      2,
      'Administrador Demo',
      'admin@saludya.com',
      '123456',
      '3000000001',
      'CC',
      '11111111',
      'O+'
    )`);

  // Médico Demo
  db.run(`INSERT OR IGNORE INTO usuarios
    (id,nombre,email,password,telefono,tipo_id,numero_id,rh)
    VALUES (
      3,
      'Medico Demo',
      'medico@saludya.com',
      '123456',
      '3000000002',
      'CC',
      '22222222',
      'O+'
    )`);
});

module.exports = db;