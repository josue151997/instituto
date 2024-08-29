package com.example.instituto.controller;

import com.example.instituto.model.Curso;
import com.example.instituto.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

    @Autowired
    private CursoRepository cursoRepository;

    // Obtener todos los cursos
    @GetMapping("/consultaCursos")
    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }

    // Obtener un curso por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Curso> getCursoById(@PathVariable Long id) {
        return cursoRepository.findById(id)
                .map(curso -> ResponseEntity.ok(curso))
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear un nuevo curso
    @PostMapping("/crearCurso")
    public Curso createCurso(@RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }

    // Actualizar un curso existente
    @PutMapping("/{id}")
    public ResponseEntity<Curso> updateCurso(@PathVariable Long id, @RequestBody Curso curso) {
        if (!cursoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        curso.setId(id);
        return ResponseEntity.ok(cursoRepository.save(curso));
    }

    // Eliminar un curso por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCurso(@PathVariable Long id) {
        if (!cursoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        cursoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
