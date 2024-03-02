import axios from "axios";

// FUNCIONES
const consultarEstudiantes = async (config) =>{
    const data = axios.get(`http://localhost:8080/API/v1.0/inscripcion/estudiantes`, config).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = async (body, config) => {
    
    const data = axios.post("http://localhost:8080/API/v1.0/inscripcion/estudiantes",body, config).then(r=>r.data)
    console.log(data)
}


// FACHADAS
export const consultarEstudiantesFachada = async (config) =>{
    return await consultarEstudiantes(config);
}

export const insertarFacahada= async(body, config) =>{
    await insertar(body, config)
}