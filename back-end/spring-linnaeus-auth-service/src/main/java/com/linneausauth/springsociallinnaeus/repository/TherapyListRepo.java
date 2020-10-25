package com.linneausauth.springsociallinnaeus.repository;

import com.linneausauth.springsociallinnaeus.model.TherapyList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TherapyListRepo extends JpaRepository<TherapyList,Long> {
}
