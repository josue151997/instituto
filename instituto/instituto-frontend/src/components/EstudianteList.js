import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EstudianteForm from './EstudianteForm';

const EstudianteList = () => {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        fetchEstudiantes();
    }, []);

    const fetchEstudiantes = async () => {
        try {
            const response = await axios.get('/api/estudiantes');
            setEstudiantes(response.data);
        } catch (error) {
            console.error("Hubo un error al obtener los estudiantes:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Estudiantes</h2>
            <ul>
                {estudiantes.map(estudiante => (
                    <li key={estudiante.id}>
                        {estudiante.nombre} - {estudiante.telefono} - {estudiante.correoElectronico}
                    </li>
                ))}
            </ul>
            <h3>Agregar Estudiante</h3>
            <EstudianteForm fetchEstudiantes={fetchEstudiantes} />
        </div>
    );
};

export default EstudianteList;
