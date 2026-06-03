
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login",(req,res)=>{
 const {email,password}=req.body;
 db.all("SELECT * FROM usuarios WHERE email=? AND password=?",[email,password],(err,rows)=>{
   if(err) return res.json({success:false});
   if(rows.length) return res.json({success:true,user:rows[0]});
   res.json({success:false});
 });
});

app.post("/register",(req,res)=>{
 const {nombre,email,password,telefono,tipo_id,numero_id,rh}=req.body;
 db.run("INSERT INTO usuarios(nombre,email,password,telefono,tipo_id,numero_id,rh) VALUES (?,?,?,?,?,?,?)",
 [nombre,email,password,telefono,tipo_id,numero_id,rh],
 function(err){
   if(err) return res.json({success:false});
   res.json({success:true,id:this.lastID});
 });
});

app.get("/usuario/:email",(req,res)=>{
 db.get("SELECT * FROM usuarios WHERE email=?",[req.params.email],(err,row)=>{
   if(err) return res.json({success:false});
   res.json({success:true,user:row});
 });
});

app.post("/citas",(req,res)=>{
 const {paciente_email,especialidad,medico,fecha,hora}=req.body;
 db.run("INSERT INTO citas(paciente_email,especialidad,medico,fecha,hora) VALUES (?,?,?,?,?)",
 [paciente_email,especialidad,medico,fecha,hora],
 function(err){
   if(err) return res.json({success:false});
   res.json({success:true,id:this.lastID});
 });
});

app.get("/citas/:email",(req,res)=>{
 db.all("SELECT * FROM citas WHERE paciente_email=?",[req.params.email],(err,rows)=>{
   if(err) return res.json({success:false});
   res.json({success:true,citas:rows});
 });
});

app.listen(process.env.PORT || 3001);
