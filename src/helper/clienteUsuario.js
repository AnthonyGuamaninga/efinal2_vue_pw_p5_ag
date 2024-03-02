import axios from "axios";

// FUNCIONES
const ingresarUsuario = async (body) => {
    const data = axios.post("http://localhost:8081/API/v1.0/Securitytmp/autorizaciones/jwt",body).then(r=>r.data) //cambiar post
    console.log(data)
    return data;
}

export const ingresarUsuarioFachada= async(body) =>{
    return await ingresarUsuario(body)
}