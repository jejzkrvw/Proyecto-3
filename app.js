import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { Test } from "./Backend/controllers/reprobados.controllers.js";

// 
dotenv. config(); // Llamando el archivo .env
mongoose. connect(process.env.urlBD)// Conectando a la base de datos
.then(() => {
    console.log("todo jao chingon con la base de datos")
})
.catch((error) => {
    console.log("no funciono la base", error)

})//promesa de funcionamiento 

const app = express(); //Realizando un servidor
app.use(cors());// Dando seguridad al server
app.listen(4000,() =>{
    console.log("se escucha el servidor correctamente")
})// Escuchando al server

Test();