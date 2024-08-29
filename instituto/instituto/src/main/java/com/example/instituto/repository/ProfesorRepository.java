package com.example.instituto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.instituto.model.Profesor;

@Repository
public interface ProfesorRepository extends JpaRepository<Profesor, Long> {

}