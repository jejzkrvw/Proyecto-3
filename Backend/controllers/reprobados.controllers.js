import {Tabla} from "../models/reprobados.model.js";

Tabla.create ({
    name: "Panchito",
    edad:25,
    calificacion:3.4
},
{
    name:"Vinicio",
    edad: 20,
    calificacion:4.4
})

export const Test = ()=>{
    console.log("llamando al controlador desde app.js correctamente")

}