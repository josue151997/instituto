// src/components/CursoForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CursoForm = ({ fetchCursos, curso, setEditingCurso }) => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    useEffect(() => {
        if (curso) {
            setNombre(curso.nombre);
            setDescripcion(curso.descripcion);
        }
    }, [curso]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (curso) {
                // Editar curso existente
                await axios.put(`/api/cursos/${curso.id}`, {
                    nombre,
                    descripcion,
                });
                setEditingCurso(null); // Salir del modo edición
            } else {
                // Agregar nuevo curso
                await axios.post('/api/cursos', {
                    nombre,
                    descripcion,
                });
            }
            fetchCursos(); // Refrescar la lista de cursos
        } catch (error) {
            console.error("Hubo un error al guardar el curso:", error);
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
                <label>Descripción:</label>
                <textarea 
                    value={descripcion} 
                    onChange={(e) => setDescripcion(e.target.value)} 
                    required
                />
            </div>
            <button type="submit">{curso ? 'Actualizar Curso' : 'Agregar Curso'}</button>
            {curso && <button type="button" onClick={() => setEditingCurso(null)}>Cancelar</button>}
        </form>
    );
};

export default CursoForm;
