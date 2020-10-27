package com.linneausauth.springsociallinnaeus.repository;

import com.linneausauth.springsociallinnaeus.model.Test;
import com.linneausauth.springsociallinnaeus.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestRepo extends JpaRepository<Test,Long> {
    List<Test> findAllByTherapyIdPatient(User user);

}
