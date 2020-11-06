package com.linneausauth.springsociallinnaeus.repository;

import com.linneausauth.springsociallinnaeus.model.PatientTestSessionData;
import com.linneausauth.springsociallinnaeus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PatientTestSessionDataRepo extends JpaRepository<PatientTestSessionData,Long> {
   // List<PatientTestSessionData> findAllByPatient();
    List<PatientTestSessionData> findAllByPatient(User user);

}
