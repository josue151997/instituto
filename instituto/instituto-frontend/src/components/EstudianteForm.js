import React, { useState } from 'react';
import axios from 'axios';

const EstudianteForm = ({ fetchEstudiantes }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/estudiantes', {
                nombre,
                telefono,
                correoElectronico,
            });
            fetchEstudiantes(); // Refrescar la lista de estudiantes después de agregar uno nuevo
        } catch (error) {
            console.error("Hubo un error al crear el estudiante:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input 
                    type="text" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input 
                    type="email" 
                    value={correoElectronico} 
                    onChange={(e) => setCorreoElectronico(e.target.value)} 
                />
            </div>
            <button type="submit">Agregar Estudiante</button>
        </form>
    );
};

export default EstudianteForm;
