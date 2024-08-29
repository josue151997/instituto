// src/App.js
import React from 'react';
import './App.css';  // Importar el archivo CSS
import EstudianteList from './components/EstudianteList';
import ProfesorList from './components/ProfesorList';
import CursoList from './components/CursoList';

function App() {
    return (
        <div className="App">
            <h1>Instituto</h1>
            <EstudianteList />
            <ProfesorList />
            <CursoList />
        </div>
    );
}

export default App;
