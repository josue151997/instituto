// src/components/CursoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CursoForm from './CursoForm';

const CursoList = () => {
    const [cursos, setCursos] = useState([]);
    const [editingCurso, setEditingCurso] = useState(null);

    useEffect(() => {
        fetchCursos();
    }, []);

    const fetchCursos = async () => {
        try {
            const response = await axios.get('/api/cursos');
            setCursos(response.data);
        } catch (error) {
            console.error("Hubo un error al obtener los cursos:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/cursos/${id}`);
            fetchCursos();
        } catch (error) {
            console.error("Hubo un error al eliminar el curso:", error);
        }
    };

    return (
        <div>
            <h2>Lista de Cursos</h2>
            <ul>
                {cursos.map(curso => (
                    <li key={curso.id}>
                        {curso.nombre} - {curso.descripcion}
                        <button onClick={() => setEditingCurso(curso)}>Editar</button>
                        <button onClick={() => handleDelete(curso.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h3>{editingCurso ? 'Editar Curso' : 'Agregar Curso'}</h3>
            <CursoForm 
                fetchCursos={fetchCursos} 
                curso={editingCurso} 
                setEditingCurso={setEditingCurso} 
            />
        </div>
    );
};

export default CursoList;
