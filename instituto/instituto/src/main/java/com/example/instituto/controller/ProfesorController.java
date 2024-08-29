package com.example.instituto.controller;

import com.example.instituto.model.Profesor;
import com.example.instituto.repository.ProfesorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profesores")
public class ProfesorController {

    @Autowired
    private ProfesorRepository profesorRepository;

    // Obtener todos los profesores
    @GetMapping("/consultaProfesores")
    public List<Profesor> getAllProfesores() {
        return profesorRepository.findAll();
    }

    // Obtener un profesor por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Profesor> getProfesorById(@PathVariable Long id) {
        return profesorRepository.findById(id)
                .map(profesor -> ResponseEntity.ok(profesor))
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear un nuevo profesor
    @PostMapping("/crearProfesor")
    public Profesor createProfesor(@RequestBody Profesor profesor) {
        return profesorRepository.save(profesor);
    }

    // Actualizar un profesor existente
    @PutMapping("/{id}")
    public ResponseEntity<Profesor> updateProfesor(@PathVariable Long id, @RequestBody Profesor profesor) {
        if (!profesorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        profesor.setId(id);
        return ResponseEntity.ok(profesorRepository.save(profesor));
    }

    // Eliminar un profesor por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfesor(@PathVariable Long id) {
        if (!profesorRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        profesorRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
