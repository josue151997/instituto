// src/components/ProfesorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfesorForm from './ProfesorForm';

const ProfesorList = () => {
    const [profesores, setProfesores] = useState([]);
    const [editingProfesor, setEditingProfesor] = useState(null);

    useEffect(() => {
        fetchProfesores();
    }, []);

    const fetchProfesores = async () => {
        try {
            const response = await axios.get('/api/profesores');
            setProfesores(response.data);
        } catch (error) {
            console.error("Hubo un error al obtener los profesores:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/profesores/${id}`);
            fetchProfesores();
        } catch (error) {
            console.error("Hubo un error al eliminar el profesor:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Profesores</h2>
            <ul>
                {profesores.map(profesor => (
                    <li key={profesor.id}>
                        {profesor.nombre} - {profesor.telefono} - {profesor.correoElectronico}
                        <button onClick={() => setEditingProfesor(profesor)}>Editar</button>
                        <button onClick={() => handleDelete(profesor.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h3>{editingProfesor ? 'Editar Profesor' : 'Agregar Profesor'}</h3>
            <ProfesorForm 
                fetchProfesores={fetchProfesores} 
                profesor={editingProfesor} 
                setEditingProfesor={setEditingProfesor} 
            />
        </div>
    );
};

export default ProfesorList;
