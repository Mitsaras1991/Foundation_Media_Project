package com.linneausauth.springsociallinnaeus.repository;

import com.linneausauth.springsociallinnaeus.model.Therapy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TherapyRepo extends JpaRepository<Therapy,Long> {
}
