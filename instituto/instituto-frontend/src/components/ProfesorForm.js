// src/components/ProfesorForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfesorForm = ({ fetchProfesores, profesor, setEditingProfesor }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correoElectronico, setCorreoElectronico] = useState('');

    useEffect(() => {
        if (profesor) {
            setNombre(profesor.nombre);
            setTelefono(profesor.telefono);
            setCorreoElectronico(profesor.correoElectronico);
        }
    }, [profesor]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (profesor) {
                // Editar profesor existente
                await axios.put(`/api/profesores/${profesor.id}`, {
                    nombre,
                    telefono,
                    correoElectronico,
                });
                setEditingProfesor(null); // Salir del modo edición
            } else {
                // Agregar nuevo profesor
                await axios.post('/api/profesores', {
                    nombre,
                    telefono,
                    correoElectronico,
                });
            }
            fetchProfesores(); // Refrescar la lista de profesores
        } catch (error) {
            console.error("Hubo un error al guardar el profesor:", error);
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
                    required
                />
            </div>
            <div>
                <label>Teléfono:</label>
                <input 
                    type="text" 
                    value={telefono} 
                    onChange={(e) => setTelefono(e.target.value)} 
                    required
                />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input 
                    type="email" 
                    value={correoElectronico} 
                    onChange={(e) => setCorreoElectronico(e.target.value)} 
                    required
                />
            </div>
            <button type="submit">{profesor ? 'Actualizar Profesor' : 'Agregar Profesor'}</button>
            {profesor && <button type="button" onClick={() => setEditingProfesor(null)}>Cancelar</button>}
        </form>
    );
};

export default ProfesorForm;
